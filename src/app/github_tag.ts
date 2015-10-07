import {GithubCommit} from './github_commit.ts';

export interface GithubTag {
    name: string;
    commit: GithubCommit;
}