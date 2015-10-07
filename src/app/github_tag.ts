import {GithubCommit} from './github_commit';

export interface GithubTag {
    name: string;
    commit: GithubCommit;
}