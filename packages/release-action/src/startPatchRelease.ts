import semver from 'semver';
import { exec } from '@actions/exec';
import * as github from '@actions/github';
import * as core from '@actions/core';

import { setupOctokit } from './setupOctokit';
import { readPackageJson } from './utils';

export async function startPatchRelease({
	githubToken,
	baseRef,
	mainPackagePath,
}: {
	baseRef: string;
	mainPackagePath: string;
	githubToken: string;
	cwd?: string;
}) {
	const octokit = setupOctokit(githubToken);

	// checkout the branch we want to start the release from
	await exec('git', ['checkout', baseRef]);

	// make sure the release-automation branch is up to date
	if (baseRef === 'master') {
		await exec('git', ['checkout', '-b', 'release-automation']);
		await exec('git', ['push', 'origin', '-f', 'HEAD:refs/heads/release-automation']);
	}

	// get version from main package
	const { version } = await readPackageJson(mainPackagePath);

	const newVersion = semver.inc(version, 'patch');
	if (!newVersion) {
		throw new Error(`Could not increment version ${version}`);
	}

	const newBranch = `release-${newVersion}`;

	// TODO check if branch exists
	await exec('git', ['checkout', '-b', newBranch]);

	// TODO we can try to cherry picks from commits at this point already, just need to define where to get them from

	// create empty changeset to have something to commit. the changeset file will be removed later in the process
	core.info('create empty changeset');
	await exec('yarn', ['changeset', 'add', '--empty']);

	await exec('git', ['add', '.']);
	await exec('git', ['commit', '-m', newVersion]);

	await exec('git', ['push', 'origin', `HEAD:refs/heads/${newBranch}`]);

	// create a pull request only if the patch is for current version
	if (baseRef === 'master') {
		const finalPrTitle = `Release ${newVersion}`;

		core.info('creating pull request');
		await octokit.rest.pulls.create({
			base: 'release-automation',
			head: newBranch,
			title: finalPrTitle,
			body: '',
			...github.context.repo,
		});
	} else {
		core.info('no pull request created: patch is not for current version');
	}
}
