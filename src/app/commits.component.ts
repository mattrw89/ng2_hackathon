import {Component, FORM_DIRECTIVES, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({ selector: 'commits' })
@View({
	template: `
		<h2>Commits</h2>	
		<ul class="list-group">
			<li class="list-group-item" *ng-for="#commit of commits">
				 <a [href]="commit.author.html_url"><img [src]="commit.author.avatar_url" height=40 width=40></a> <a [href]="commit.html_url">{{commit.commit.message}}</a>
			</li>
		</ul>
			
	`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class CommitsComponent {
	public commits = [
{
"sha": "f7aa890adef00de8dc2f421dd317220994ae4d20",
"commit": {
"author": {
"name": "Alex Eagle",
"email": "alexeagle@google.com",
"date": "2015-10-02T20:32:48Z"
},
"committer": {
"name": "Alex Eagle",
"email": "alexeagle@google.com",
"date": "2015-10-07T00:08:41Z"
},
"message": "chore(docs): rename @private to @internal\n\nThe latter is understood by TypeScript's --stripInternal option, so this lets us\nrely more on the tooling provided by typescript team.",
"tree": {
"sha": "6c023b9ab05832c2f98ff1f5bf6a529b1aabc834",
"url": "https://api.github.com/repos/angular/angular/git/trees/6c023b9ab05832c2f98ff1f5bf6a529b1aabc834"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/f7aa890adef00de8dc2f421dd317220994ae4d20",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/f7aa890adef00de8dc2f421dd317220994ae4d20",
"html_url": "https://github.com/angular/angular/commit/f7aa890adef00de8dc2f421dd317220994ae4d20",
"comments_url": "https://api.github.com/repos/angular/angular/commits/f7aa890adef00de8dc2f421dd317220994ae4d20/comments",
"author": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "4a36fd82030d5faad9819d8ebd60598122eb67aa",
"url": "https://api.github.com/repos/angular/angular/commits/4a36fd82030d5faad9819d8ebd60598122eb67aa",
"html_url": "https://github.com/angular/angular/commit/4a36fd82030d5faad9819d8ebd60598122eb67aa"
}
]
},
{
"sha": "4a36fd82030d5faad9819d8ebd60598122eb67aa",
"commit": {
"author": {
"name": "Rob Wormald",
"email": "robwormald@gmail.com",
"date": "2015-10-06T01:04:28Z"
},
"committer": {
"name": "Rob Wormald",
"email": "robwormald@gmail.com",
"date": "2015-10-06T23:27:35Z"
},
"message": "fix(core): make .toRx() return Subject\n\nthis was broken in the original great RxNext migration.\nfixes #4521\n\nCloses #4540",
"tree": {
"sha": "32413166f7014185a8290ecd84963bee2d3ec292",
"url": "https://api.github.com/repos/angular/angular/git/trees/32413166f7014185a8290ecd84963bee2d3ec292"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/4a36fd82030d5faad9819d8ebd60598122eb67aa",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/4a36fd82030d5faad9819d8ebd60598122eb67aa",
"html_url": "https://github.com/angular/angular/commit/4a36fd82030d5faad9819d8ebd60598122eb67aa",
"comments_url": "https://api.github.com/repos/angular/angular/commits/4a36fd82030d5faad9819d8ebd60598122eb67aa/comments",
"author": {
"login": "robwormald",
"id": 534930,
"avatar_url": "https://avatars.githubusercontent.com/u/534930?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/robwormald",
"html_url": "https://github.com/robwormald",
"followers_url": "https://api.github.com/users/robwormald/followers",
"following_url": "https://api.github.com/users/robwormald/following{/other_user}",
"gists_url": "https://api.github.com/users/robwormald/gists{/gist_id}",
"starred_url": "https://api.github.com/users/robwormald/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/robwormald/subscriptions",
"organizations_url": "https://api.github.com/users/robwormald/orgs",
"repos_url": "https://api.github.com/users/robwormald/repos",
"events_url": "https://api.github.com/users/robwormald/events{/privacy}",
"received_events_url": "https://api.github.com/users/robwormald/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "robwormald",
"id": 534930,
"avatar_url": "https://avatars.githubusercontent.com/u/534930?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/robwormald",
"html_url": "https://github.com/robwormald",
"followers_url": "https://api.github.com/users/robwormald/followers",
"following_url": "https://api.github.com/users/robwormald/following{/other_user}",
"gists_url": "https://api.github.com/users/robwormald/gists{/gist_id}",
"starred_url": "https://api.github.com/users/robwormald/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/robwormald/subscriptions",
"organizations_url": "https://api.github.com/users/robwormald/orgs",
"repos_url": "https://api.github.com/users/robwormald/repos",
"events_url": "https://api.github.com/users/robwormald/events{/privacy}",
"received_events_url": "https://api.github.com/users/robwormald/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"url": "https://api.github.com/repos/angular/angular/commits/ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"html_url": "https://github.com/angular/angular/commit/ba6e0e11fa7b34843fd23ecab199f7474a294acd"
}
]
},
{
"sha": "ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"commit": {
"author": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-02T21:05:34Z"
},
"committer": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-06T23:18:58Z"
},
"message": "fix(dart/transform): Sanitize generated library names\n\nSanitize generated library names by removing unsafe characters and\nensuring that Dart keywords do not appear as library segments.",
"tree": {
"sha": "e6f82d2270866968e15a02cafefb9d11491c228e",
"url": "https://api.github.com/repos/angular/angular/git/trees/e6f82d2270866968e15a02cafefb9d11491c228e"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"html_url": "https://github.com/angular/angular/commit/ba6e0e11fa7b34843fd23ecab199f7474a294acd",
"comments_url": "https://api.github.com/repos/angular/angular/commits/ba6e0e11fa7b34843fd23ecab199f7474a294acd/comments",
"author": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "4ac29621f4a2adf02520f47739cdee41b6527c5f",
"url": "https://api.github.com/repos/angular/angular/commits/4ac29621f4a2adf02520f47739cdee41b6527c5f",
"html_url": "https://github.com/angular/angular/commit/4ac29621f4a2adf02520f47739cdee41b6527c5f"
}
]
},
{
"sha": "4ac29621f4a2adf02520f47739cdee41b6527c5f",
"commit": {
"author": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-01T18:05:43Z"
},
"committer": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-06T23:18:58Z"
},
"message": "refactor(dart/transform): Compose NgDepsModel & NgMeta phases\n\nLink `NgDeps` & `NgMeta` data in the same phase to avoid unnecessary asset\ncreation & reading.\n\nRemove `NgMeta#exports` and instead use `NgDeps#exports` to link `NgMeta` files\nin `ng_meta_linker.dart`.",
"tree": {
"sha": "4cf0832a0d7973bb1b80a526b1551f31da485757",
"url": "https://api.github.com/repos/angular/angular/git/trees/4cf0832a0d7973bb1b80a526b1551f31da485757"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/4ac29621f4a2adf02520f47739cdee41b6527c5f",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/4ac29621f4a2adf02520f47739cdee41b6527c5f",
"html_url": "https://github.com/angular/angular/commit/4ac29621f4a2adf02520f47739cdee41b6527c5f",
"comments_url": "https://api.github.com/repos/angular/angular/commits/4ac29621f4a2adf02520f47739cdee41b6527c5f/comments",
"author": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"url": "https://api.github.com/repos/angular/angular/commits/75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"html_url": "https://github.com/angular/angular/commit/75187d605b5ac6ea6d4b3db7a6416100ff3505ed"
}
]
},
{
"sha": "75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"commit": {
"author": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-06T16:03:44Z"
},
"committer": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-06T22:54:17Z"
},
"message": "chore: remove unused docs/dgeni tasks and packages\n\nThis stuff now lives in angular.io repo.\n\nRelated to #4477\n\nCloses #4552",
"tree": {
"sha": "a6e40b86140fe9789cc3a529917e29e47a30a0f8",
"url": "https://api.github.com/repos/angular/angular/git/trees/a6e40b86140fe9789cc3a529917e29e47a30a0f8"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"html_url": "https://github.com/angular/angular/commit/75187d605b5ac6ea6d4b3db7a6416100ff3505ed",
"comments_url": "https://api.github.com/repos/angular/angular/commits/75187d605b5ac6ea6d4b3db7a6416100ff3505ed/comments",
"author": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"url": "https://api.github.com/repos/angular/angular/commits/5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"html_url": "https://github.com/angular/angular/commit/5040a8e0dff9e20dfb282d33d4e5a9b94793775e"
}
]
},
{
"sha": "5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"commit": {
"author": {
"name": "Marc Laval",
"email": "mlaval@amadeus.com",
"date": "2015-10-06T16:30:18Z"
},
"committer": {
"name": "Marc Laval",
"email": "mlaval@amadeus.com",
"date": "2015-10-06T22:24:59Z"
},
"message": "chore(saucelabs): fallback from Firefox dev to beta\n\nCloses #4553",
"tree": {
"sha": "1c86de70c8434847db0911f7059e057c515af80d",
"url": "https://api.github.com/repos/angular/angular/git/trees/1c86de70c8434847db0911f7059e057c515af80d"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"html_url": "https://github.com/angular/angular/commit/5040a8e0dff9e20dfb282d33d4e5a9b94793775e",
"comments_url": "https://api.github.com/repos/angular/angular/commits/5040a8e0dff9e20dfb282d33d4e5a9b94793775e/comments",
"author": {
"login": "mlaval",
"id": 2316643,
"avatar_url": "https://avatars.githubusercontent.com/u/2316643?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mlaval",
"html_url": "https://github.com/mlaval",
"followers_url": "https://api.github.com/users/mlaval/followers",
"following_url": "https://api.github.com/users/mlaval/following{/other_user}",
"gists_url": "https://api.github.com/users/mlaval/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mlaval/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mlaval/subscriptions",
"organizations_url": "https://api.github.com/users/mlaval/orgs",
"repos_url": "https://api.github.com/users/mlaval/repos",
"events_url": "https://api.github.com/users/mlaval/events{/privacy}",
"received_events_url": "https://api.github.com/users/mlaval/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "mlaval",
"id": 2316643,
"avatar_url": "https://avatars.githubusercontent.com/u/2316643?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mlaval",
"html_url": "https://github.com/mlaval",
"followers_url": "https://api.github.com/users/mlaval/followers",
"following_url": "https://api.github.com/users/mlaval/following{/other_user}",
"gists_url": "https://api.github.com/users/mlaval/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mlaval/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mlaval/subscriptions",
"organizations_url": "https://api.github.com/users/mlaval/orgs",
"repos_url": "https://api.github.com/users/mlaval/repos",
"events_url": "https://api.github.com/users/mlaval/events{/privacy}",
"received_events_url": "https://api.github.com/users/mlaval/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"url": "https://api.github.com/repos/angular/angular/commits/a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"html_url": "https://github.com/angular/angular/commit/a4869c874bc3c2060c7b52697cf019a0bbcd4071"
}
]
},
{
"sha": "a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"commit": {
"author": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-06T17:08:22Z"
},
"committer": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-06T21:11:03Z"
},
"message": "build(dart): Remove unused Dart benchmarks",
"tree": {
"sha": "36ed13c2b7fd3cd9884d52fc61eae091bcf1d586",
"url": "https://api.github.com/repos/angular/angular/git/trees/36ed13c2b7fd3cd9884d52fc61eae091bcf1d586"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"html_url": "https://github.com/angular/angular/commit/a4869c874bc3c2060c7b52697cf019a0bbcd4071",
"comments_url": "https://api.github.com/repos/angular/angular/commits/a4869c874bc3c2060c7b52697cf019a0bbcd4071/comments",
"author": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "b6210be64837440f1a2229e4302f1c2ab61e21e8",
"url": "https://api.github.com/repos/angular/angular/commits/b6210be64837440f1a2229e4302f1c2ab61e21e8",
"html_url": "https://github.com/angular/angular/commit/b6210be64837440f1a2229e4302f1c2ab61e21e8"
}
]
},
{
"sha": "b6210be64837440f1a2229e4302f1c2ab61e21e8",
"commit": {
"author": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-06T19:11:51Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-06T20:13:23Z"
},
"message": "chore(changelog): update change log to alpha.39",
"tree": {
"sha": "0c922ea999025367c3a43f0d3b3277276f63d744",
"url": "https://api.github.com/repos/angular/angular/git/trees/0c922ea999025367c3a43f0d3b3277276f63d744"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/b6210be64837440f1a2229e4302f1c2ab61e21e8",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/b6210be64837440f1a2229e4302f1c2ab61e21e8",
"html_url": "https://github.com/angular/angular/commit/b6210be64837440f1a2229e4302f1c2ab61e21e8",
"comments_url": "https://api.github.com/repos/angular/angular/commits/b6210be64837440f1a2229e4302f1c2ab61e21e8/comments",
"author": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"url": "https://api.github.com/repos/angular/angular/commits/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"html_url": "https://github.com/angular/angular/commit/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05"
}
]
},
{
"sha": "8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"commit": {
"author": {
"name": "Misko Hevery",
"email": "misko@hevery.com",
"date": "2015-10-04T16:33:20Z"
},
"committer": {
"name": "Miško Hevery",
"email": "misko@hevery.com",
"date": "2015-10-06T19:08:56Z"
},
"message": "feat(upgrade): support binding of Ng1 form Ng2\n\nCloses #4542",
"tree": {
"sha": "192952d8693ca2d02ed5eee2e66a9db04346f177",
"url": "https://api.github.com/repos/angular/angular/git/trees/192952d8693ca2d02ed5eee2e66a9db04346f177"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"html_url": "https://github.com/angular/angular/commit/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05",
"comments_url": "https://api.github.com/repos/angular/angular/commits/8e1d2fb3255f69b796ae26938ab9aec8e58d6f05/comments",
"author": {
"login": "mhevery",
"id": 111951,
"avatar_url": "https://avatars.githubusercontent.com/u/111951?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mhevery",
"html_url": "https://github.com/mhevery",
"followers_url": "https://api.github.com/users/mhevery/followers",
"following_url": "https://api.github.com/users/mhevery/following{/other_user}",
"gists_url": "https://api.github.com/users/mhevery/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mhevery/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mhevery/subscriptions",
"organizations_url": "https://api.github.com/users/mhevery/orgs",
"repos_url": "https://api.github.com/users/mhevery/repos",
"events_url": "https://api.github.com/users/mhevery/events{/privacy}",
"received_events_url": "https://api.github.com/users/mhevery/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "mhevery",
"id": 111951,
"avatar_url": "https://avatars.githubusercontent.com/u/111951?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mhevery",
"html_url": "https://github.com/mhevery",
"followers_url": "https://api.github.com/users/mhevery/followers",
"following_url": "https://api.github.com/users/mhevery/following{/other_user}",
"gists_url": "https://api.github.com/users/mhevery/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mhevery/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mhevery/subscriptions",
"organizations_url": "https://api.github.com/users/mhevery/orgs",
"repos_url": "https://api.github.com/users/mhevery/repos",
"events_url": "https://api.github.com/users/mhevery/events{/privacy}",
"received_events_url": "https://api.github.com/users/mhevery/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "bb4fd2de946c413c7b2026ca079c530f5789eb38",
"url": "https://api.github.com/repos/angular/angular/commits/bb4fd2de946c413c7b2026ca079c530f5789eb38",
"html_url": "https://github.com/angular/angular/commit/bb4fd2de946c413c7b2026ca079c530f5789eb38"
}
]
},
{
"sha": "bb4fd2de946c413c7b2026ca079c530f5789eb38",
"commit": {
"author": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-05T18:31:42Z"
},
"committer": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-06T18:27:49Z"
},
"message": "build(gulp): simplify Dart transformer tasks\n\nNow that `modules_dart` contains only `transform` code, simplify its\n`gulp` rules.",
"tree": {
"sha": "56bbb6b08dca614103e786c4fc16acbdd67d98e2",
"url": "https://api.github.com/repos/angular/angular/git/trees/56bbb6b08dca614103e786c4fc16acbdd67d98e2"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/bb4fd2de946c413c7b2026ca079c530f5789eb38",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/bb4fd2de946c413c7b2026ca079c530f5789eb38",
"html_url": "https://github.com/angular/angular/commit/bb4fd2de946c413c7b2026ca079c530f5789eb38",
"comments_url": "https://api.github.com/repos/angular/angular/commits/bb4fd2de946c413c7b2026ca079c530f5789eb38/comments",
"author": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"url": "https://api.github.com/repos/angular/angular/commits/fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"html_url": "https://github.com/angular/angular/commit/fd5cd84065d3585ffea94e34b9a4103395b1d08a"
}
]
},
{
"sha": "fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"commit": {
"author": {
"name": "Victor Berchet",
"email": "victor@suumit.com",
"date": "2015-10-06T17:41:46Z"
},
"committer": {
"name": "Victor Berchet",
"email": "victor@suumit.com",
"date": "2015-10-06T18:16:38Z"
},
"message": "chore(zone.js): update to 0.5.8\n\nfixes #4531",
"tree": {
"sha": "ca123cc5b0712a3da08589766d9f80d38e839a8a",
"url": "https://api.github.com/repos/angular/angular/git/trees/ca123cc5b0712a3da08589766d9f80d38e839a8a"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"html_url": "https://github.com/angular/angular/commit/fd5cd84065d3585ffea94e34b9a4103395b1d08a",
"comments_url": "https://api.github.com/repos/angular/angular/commits/fd5cd84065d3585ffea94e34b9a4103395b1d08a/comments",
"author": {
"login": "vicb",
"id": 248818,
"avatar_url": "https://avatars.githubusercontent.com/u/248818?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/vicb",
"html_url": "https://github.com/vicb",
"followers_url": "https://api.github.com/users/vicb/followers",
"following_url": "https://api.github.com/users/vicb/following{/other_user}",
"gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
"starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
"organizations_url": "https://api.github.com/users/vicb/orgs",
"repos_url": "https://api.github.com/users/vicb/repos",
"events_url": "https://api.github.com/users/vicb/events{/privacy}",
"received_events_url": "https://api.github.com/users/vicb/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "vicb",
"id": 248818,
"avatar_url": "https://avatars.githubusercontent.com/u/248818?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/vicb",
"html_url": "https://github.com/vicb",
"followers_url": "https://api.github.com/users/vicb/followers",
"following_url": "https://api.github.com/users/vicb/following{/other_user}",
"gists_url": "https://api.github.com/users/vicb/gists{/gist_id}",
"starred_url": "https://api.github.com/users/vicb/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/vicb/subscriptions",
"organizations_url": "https://api.github.com/users/vicb/orgs",
"repos_url": "https://api.github.com/users/vicb/repos",
"events_url": "https://api.github.com/users/vicb/events{/privacy}",
"received_events_url": "https://api.github.com/users/vicb/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "6117a7037bc927bbac71e885bba272f061cde091",
"url": "https://api.github.com/repos/angular/angular/commits/6117a7037bc927bbac71e885bba272f061cde091",
"html_url": "https://github.com/angular/angular/commit/6117a7037bc927bbac71e885bba272f061cde091"
}
]
},
{
"sha": "6117a7037bc927bbac71e885bba272f061cde091",
"commit": {
"author": {
"name": "Brian Ford",
"email": "btford@umich.edu",
"date": "2015-10-05T23:28:53Z"
},
"committer": {
"name": "Brian Ford",
"email": "btford@umich.edu",
"date": "2015-10-06T17:55:08Z"
},
"message": "chore(build): copy bundles so they can be used with e2e tests",
"tree": {
"sha": "44b01273b0dd75af771612b9139e83b593439c9e",
"url": "https://api.github.com/repos/angular/angular/git/trees/44b01273b0dd75af771612b9139e83b593439c9e"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/6117a7037bc927bbac71e885bba272f061cde091",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/6117a7037bc927bbac71e885bba272f061cde091",
"html_url": "https://github.com/angular/angular/commit/6117a7037bc927bbac71e885bba272f061cde091",
"comments_url": "https://api.github.com/repos/angular/angular/commits/6117a7037bc927bbac71e885bba272f061cde091/comments",
"author": {
"login": "btford",
"id": 474988,
"avatar_url": "https://avatars.githubusercontent.com/u/474988?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/btford",
"html_url": "https://github.com/btford",
"followers_url": "https://api.github.com/users/btford/followers",
"following_url": "https://api.github.com/users/btford/following{/other_user}",
"gists_url": "https://api.github.com/users/btford/gists{/gist_id}",
"starred_url": "https://api.github.com/users/btford/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/btford/subscriptions",
"organizations_url": "https://api.github.com/users/btford/orgs",
"repos_url": "https://api.github.com/users/btford/repos",
"events_url": "https://api.github.com/users/btford/events{/privacy}",
"received_events_url": "https://api.github.com/users/btford/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "btford",
"id": 474988,
"avatar_url": "https://avatars.githubusercontent.com/u/474988?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/btford",
"html_url": "https://github.com/btford",
"followers_url": "https://api.github.com/users/btford/followers",
"following_url": "https://api.github.com/users/btford/following{/other_user}",
"gists_url": "https://api.github.com/users/btford/gists{/gist_id}",
"starred_url": "https://api.github.com/users/btford/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/btford/subscriptions",
"organizations_url": "https://api.github.com/users/btford/orgs",
"repos_url": "https://api.github.com/users/btford/repos",
"events_url": "https://api.github.com/users/btford/events{/privacy}",
"received_events_url": "https://api.github.com/users/btford/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"url": "https://api.github.com/repos/angular/angular/commits/4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"html_url": "https://github.com/angular/angular/commit/4d9de666c87488a3a3da3477ab6e743b260e1fb1"
}
]
},
{
"sha": "4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"commit": {
"author": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-05T02:20:38Z"
},
"committer": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-06T17:12:53Z"
},
"message": "chore: remove dead code",
"tree": {
"sha": "76de358c65ee976cadb340f6a218c131234687a3",
"url": "https://api.github.com/repos/angular/angular/git/trees/76de358c65ee976cadb340f6a218c131234687a3"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"html_url": "https://github.com/angular/angular/commit/4d9de666c87488a3a3da3477ab6e743b260e1fb1",
"comments_url": "https://api.github.com/repos/angular/angular/commits/4d9de666c87488a3a3da3477ab6e743b260e1fb1/comments",
"author": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"url": "https://api.github.com/repos/angular/angular/commits/4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"html_url": "https://github.com/angular/angular/commit/4ebb1a9096f1c7c5e6875326724aacdb61bfa030"
}
]
},
{
"sha": "4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"commit": {
"author": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-04T03:04:28Z"
},
"committer": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-06T17:12:53Z"
},
"message": "fix: add test_lib.d.ts to type definitions in generated package.json",
"tree": {
"sha": "f7cc27bd351472ebe789f073a7e77c15a1cf9c10",
"url": "https://api.github.com/repos/angular/angular/git/trees/f7cc27bd351472ebe789f073a7e77c15a1cf9c10"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"html_url": "https://github.com/angular/angular/commit/4ebb1a9096f1c7c5e6875326724aacdb61bfa030",
"comments_url": "https://api.github.com/repos/angular/angular/commits/4ebb1a9096f1c7c5e6875326724aacdb61bfa030/comments",
"author": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"url": "https://api.github.com/repos/angular/angular/commits/9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"html_url": "https://github.com/angular/angular/commit/9679fc94f64a78e158ccd6de3b598f0b84ea9b37"
}
]
},
{
"sha": "9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"commit": {
"author": {
"name": "Michał Gołębiowski",
"email": "m.goleb@gmail.com",
"date": "2015-09-28T13:25:20Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-06T16:38:49Z"
},
"message": "fix(shims): Don't rely on prefixed requestAnimationFrame\n\nThe `ms` & `moz` prefixes are not needed. `ms` was never available in a public\nIE release (IE 10 has an unprefixed version) and Firefox has unprefixed\nrAF since v24 - current version is 41. Even more, Firefox versions below 22\ndon't have cancelAnimationFrame so it's better to not use the prefixed version\nat all to avoid surprises.\n\nThe `o` prefix is also useless - Opera Presto never had rAF and the\nChromium-based Opera doesn't use the `o` prefix.\n\nAlso, switched from `new Date().getTime()` to `Date.now()` as it's supported\neverywhere (even in Android 2.3) except IE<9 and it avoids a useless date\nobject construction.\n\nSee http://caniuse.com/#feat=requestanimationframe for more info.\n\nRefs 4f56a01b3b9ac7edf8ebaa1e86425808920c2370\n\nCloses #4394",
"tree": {
"sha": "be83355ad617855bfe2fee50f79556dec7ed8b97",
"url": "https://api.github.com/repos/angular/angular/git/trees/be83355ad617855bfe2fee50f79556dec7ed8b97"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"html_url": "https://github.com/angular/angular/commit/9679fc94f64a78e158ccd6de3b598f0b84ea9b37",
"comments_url": "https://api.github.com/repos/angular/angular/commits/9679fc94f64a78e158ccd6de3b598f0b84ea9b37/comments",
"author": {
"login": "mzgol",
"id": 1758366,
"avatar_url": "https://avatars.githubusercontent.com/u/1758366?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mzgol",
"html_url": "https://github.com/mzgol",
"followers_url": "https://api.github.com/users/mzgol/followers",
"following_url": "https://api.github.com/users/mzgol/following{/other_user}",
"gists_url": "https://api.github.com/users/mzgol/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mzgol/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mzgol/subscriptions",
"organizations_url": "https://api.github.com/users/mzgol/orgs",
"repos_url": "https://api.github.com/users/mzgol/repos",
"events_url": "https://api.github.com/users/mzgol/events{/privacy}",
"received_events_url": "https://api.github.com/users/mzgol/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"url": "https://api.github.com/repos/angular/angular/commits/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"html_url": "https://github.com/angular/angular/commit/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc"
}
]
},
{
"sha": "076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"commit": {
"author": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-03T17:39:32Z"
},
"committer": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-06T15:50:33Z"
},
"message": "chore(bundles): publish minified router bundle\n\nCloses #4503",
"tree": {
"sha": "ba7fe58e788726daefa731eadba3e24143f1765f",
"url": "https://api.github.com/repos/angular/angular/git/trees/ba7fe58e788726daefa731eadba3e24143f1765f"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"html_url": "https://github.com/angular/angular/commit/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc",
"comments_url": "https://api.github.com/repos/angular/angular/commits/076191cf9d4bb5eaf771a8ff6147d0e854aa3adc/comments",
"author": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"url": "https://api.github.com/repos/angular/angular/commits/74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"html_url": "https://github.com/angular/angular/commit/74c0daab270bcb462eea10dd3a4e2a81557ed9a3"
}
]
},
{
"sha": "74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"commit": {
"author": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-03T17:32:19Z"
},
"committer": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-06T15:50:33Z"
},
"message": "chore(build): minify bundles in parallel",
"tree": {
"sha": "b1f01ee93093125894ae0f8191cf241ad871987f",
"url": "https://api.github.com/repos/angular/angular/git/trees/b1f01ee93093125894ae0f8191cf241ad871987f"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"html_url": "https://github.com/angular/angular/commit/74c0daab270bcb462eea10dd3a4e2a81557ed9a3",
"comments_url": "https://api.github.com/repos/angular/angular/commits/74c0daab270bcb462eea10dd3a4e2a81557ed9a3/comments",
"author": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "6093e28b61bdcce4619387d66fb451ae853c93e9",
"url": "https://api.github.com/repos/angular/angular/commits/6093e28b61bdcce4619387d66fb451ae853c93e9",
"html_url": "https://github.com/angular/angular/commit/6093e28b61bdcce4619387d66fb451ae853c93e9"
}
]
},
{
"sha": "6093e28b61bdcce4619387d66fb451ae853c93e9",
"commit": {
"author": {
"name": "Alex Eagle",
"email": "alexeagle@google.com",
"date": "2015-10-05T23:02:21Z"
},
"committer": {
"name": "Alex Eagle",
"email": "eagle@post.harvard.edu",
"date": "2015-10-06T13:28:17Z"
},
"message": "fix(typings): repair broken typechecks\n\nWe had the typechecker disabled by accident, and many problems snuck in\n\nFixes #4507\n\nCloses #4508",
"tree": {
"sha": "c012b40f7f83bd0aa6a93c7fe3e379fe42a9650d",
"url": "https://api.github.com/repos/angular/angular/git/trees/c012b40f7f83bd0aa6a93c7fe3e379fe42a9650d"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/6093e28b61bdcce4619387d66fb451ae853c93e9",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/6093e28b61bdcce4619387d66fb451ae853c93e9",
"html_url": "https://github.com/angular/angular/commit/6093e28b61bdcce4619387d66fb451ae853c93e9",
"comments_url": "https://api.github.com/repos/angular/angular/commits/6093e28b61bdcce4619387d66fb451ae853c93e9/comments",
"author": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "ae6f549f10555ea08ac3d5dabbf4346af119546d",
"url": "https://api.github.com/repos/angular/angular/commits/ae6f549f10555ea08ac3d5dabbf4346af119546d",
"html_url": "https://github.com/angular/angular/commit/ae6f549f10555ea08ac3d5dabbf4346af119546d"
}
]
},
{
"sha": "ae6f549f10555ea08ac3d5dabbf4346af119546d",
"commit": {
"author": {
"name": "Alex Eagle",
"email": "alexeagle@google.com",
"date": "2015-10-04T00:20:34Z"
},
"committer": {
"name": "Alex Eagle",
"email": "eagle@post.harvard.edu",
"date": "2015-10-06T13:28:17Z"
},
"message": "chore(typings): re-enable type-checking on the browser trees",
"tree": {
"sha": "f4d44595bd32717d597e624211564b452cbb5ba1",
"url": "https://api.github.com/repos/angular/angular/git/trees/f4d44595bd32717d597e624211564b452cbb5ba1"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/ae6f549f10555ea08ac3d5dabbf4346af119546d",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/ae6f549f10555ea08ac3d5dabbf4346af119546d",
"html_url": "https://github.com/angular/angular/commit/ae6f549f10555ea08ac3d5dabbf4346af119546d",
"comments_url": "https://api.github.com/repos/angular/angular/commits/ae6f549f10555ea08ac3d5dabbf4346af119546d/comments",
"author": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "alexeagle",
"id": 47395,
"avatar_url": "https://avatars.githubusercontent.com/u/47395?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/alexeagle",
"html_url": "https://github.com/alexeagle",
"followers_url": "https://api.github.com/users/alexeagle/followers",
"following_url": "https://api.github.com/users/alexeagle/following{/other_user}",
"gists_url": "https://api.github.com/users/alexeagle/gists{/gist_id}",
"starred_url": "https://api.github.com/users/alexeagle/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/alexeagle/subscriptions",
"organizations_url": "https://api.github.com/users/alexeagle/orgs",
"repos_url": "https://api.github.com/users/alexeagle/repos",
"events_url": "https://api.github.com/users/alexeagle/events{/privacy}",
"received_events_url": "https://api.github.com/users/alexeagle/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "74c852b1608cb817a5328322be22dc71d4f9f196",
"url": "https://api.github.com/repos/angular/angular/commits/74c852b1608cb817a5328322be22dc71d4f9f196",
"html_url": "https://github.com/angular/angular/commit/74c852b1608cb817a5328322be22dc71d4f9f196"
}
]
},
{
"sha": "74c852b1608cb817a5328322be22dc71d4f9f196",
"commit": {
"author": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-05T18:37:20Z"
},
"committer": {
"name": "Naomi Black",
"email": "naomitraveller@gmail.com",
"date": "2015-10-05T21:26:28Z"
},
"message": "docs(developer.md): update node version in setup instructions\n\nCloses #4527",
"tree": {
"sha": "22170326941051b8b238f147c413670ed437306c",
"url": "https://api.github.com/repos/angular/angular/git/trees/22170326941051b8b238f147c413670ed437306c"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/74c852b1608cb817a5328322be22dc71d4f9f196",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/74c852b1608cb817a5328322be22dc71d4f9f196",
"html_url": "https://github.com/angular/angular/commit/74c852b1608cb817a5328322be22dc71d4f9f196",
"comments_url": "https://api.github.com/repos/angular/angular/commits/74c852b1608cb817a5328322be22dc71d4f9f196/comments",
"author": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "naomiblack",
"id": 2286589,
"avatar_url": "https://avatars.githubusercontent.com/u/2286589?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/naomiblack",
"html_url": "https://github.com/naomiblack",
"followers_url": "https://api.github.com/users/naomiblack/followers",
"following_url": "https://api.github.com/users/naomiblack/following{/other_user}",
"gists_url": "https://api.github.com/users/naomiblack/gists{/gist_id}",
"starred_url": "https://api.github.com/users/naomiblack/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/naomiblack/subscriptions",
"organizations_url": "https://api.github.com/users/naomiblack/orgs",
"repos_url": "https://api.github.com/users/naomiblack/repos",
"events_url": "https://api.github.com/users/naomiblack/events{/privacy}",
"received_events_url": "https://api.github.com/users/naomiblack/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "349416ea533d247550758fc7c4739a16dba921a7",
"url": "https://api.github.com/repos/angular/angular/commits/349416ea533d247550758fc7c4739a16dba921a7",
"html_url": "https://github.com/angular/angular/commit/349416ea533d247550758fc7c4739a16dba921a7"
}
]
},
{
"sha": "349416ea533d247550758fc7c4739a16dba921a7",
"commit": {
"author": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-03T00:01:27Z"
},
"committer": {
"name": "Tim Blasi",
"email": "tjblasi@google.com",
"date": "2015-10-05T20:18:15Z"
},
"message": "test(dart/transform): e2e test inliner_for_test\n\nAdd an e2e test for the `inliner_for_test` transformer.",
"tree": {
"sha": "cd6489770fa7b920e299ba7004fbc2ea8a869505",
"url": "https://api.github.com/repos/angular/angular/git/trees/cd6489770fa7b920e299ba7004fbc2ea8a869505"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/349416ea533d247550758fc7c4739a16dba921a7",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/349416ea533d247550758fc7c4739a16dba921a7",
"html_url": "https://github.com/angular/angular/commit/349416ea533d247550758fc7c4739a16dba921a7",
"comments_url": "https://api.github.com/repos/angular/angular/commits/349416ea533d247550758fc7c4739a16dba921a7/comments",
"author": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "kegluneq",
"id": 613610,
"avatar_url": "https://avatars.githubusercontent.com/u/613610?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/kegluneq",
"html_url": "https://github.com/kegluneq",
"followers_url": "https://api.github.com/users/kegluneq/followers",
"following_url": "https://api.github.com/users/kegluneq/following{/other_user}",
"gists_url": "https://api.github.com/users/kegluneq/gists{/gist_id}",
"starred_url": "https://api.github.com/users/kegluneq/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/kegluneq/subscriptions",
"organizations_url": "https://api.github.com/users/kegluneq/orgs",
"repos_url": "https://api.github.com/users/kegluneq/repos",
"events_url": "https://api.github.com/users/kegluneq/events{/privacy}",
"received_events_url": "https://api.github.com/users/kegluneq/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "f638834fcf4087cb7b0037711192c3d054dac25a",
"url": "https://api.github.com/repos/angular/angular/commits/f638834fcf4087cb7b0037711192c3d054dac25a",
"html_url": "https://github.com/angular/angular/commit/f638834fcf4087cb7b0037711192c3d054dac25a"
}
]
},
{
"sha": "f638834fcf4087cb7b0037711192c3d054dac25a",
"commit": {
"author": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-03T15:56:08Z"
},
"committer": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-05T20:07:42Z"
},
"message": "docs(CHANGELOG): add breaking change for the NgNonBindable directive\n\nCloses #4499\n\nCloses #4501",
"tree": {
"sha": "556deb35a02759e9480b240ad41c76e78c45c673",
"url": "https://api.github.com/repos/angular/angular/git/trees/556deb35a02759e9480b240ad41c76e78c45c673"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/f638834fcf4087cb7b0037711192c3d054dac25a",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/f638834fcf4087cb7b0037711192c3d054dac25a",
"html_url": "https://github.com/angular/angular/commit/f638834fcf4087cb7b0037711192c3d054dac25a",
"comments_url": "https://api.github.com/repos/angular/angular/commits/f638834fcf4087cb7b0037711192c3d054dac25a/comments",
"author": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"url": "https://api.github.com/repos/angular/angular/commits/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"html_url": "https://github.com/angular/angular/commit/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172"
}
]
},
{
"sha": "09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"commit": {
"author": {
"name": "Misko Hevery",
"email": "misko@hevery.com",
"date": "2015-10-01T20:14:59Z"
},
"committer": {
"name": "Misko Hevery",
"email": "misko@hevery.com",
"date": "2015-10-05T19:37:31Z"
},
"message": "feat(upgrade): support binding of Ng2 form Ng1\n\nCloses #4458",
"tree": {
"sha": "b2b6908e0e4e308789e74e3709104603d9f2d26b",
"url": "https://api.github.com/repos/angular/angular/git/trees/b2b6908e0e4e308789e74e3709104603d9f2d26b"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"html_url": "https://github.com/angular/angular/commit/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172",
"comments_url": "https://api.github.com/repos/angular/angular/commits/09371a3f0bdba523b0e6e2fd64fd9e69f84c7172/comments",
"author": {
"login": "mhevery",
"id": 111951,
"avatar_url": "https://avatars.githubusercontent.com/u/111951?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mhevery",
"html_url": "https://github.com/mhevery",
"followers_url": "https://api.github.com/users/mhevery/followers",
"following_url": "https://api.github.com/users/mhevery/following{/other_user}",
"gists_url": "https://api.github.com/users/mhevery/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mhevery/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mhevery/subscriptions",
"organizations_url": "https://api.github.com/users/mhevery/orgs",
"repos_url": "https://api.github.com/users/mhevery/repos",
"events_url": "https://api.github.com/users/mhevery/events{/privacy}",
"received_events_url": "https://api.github.com/users/mhevery/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "mhevery",
"id": 111951,
"avatar_url": "https://avatars.githubusercontent.com/u/111951?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/mhevery",
"html_url": "https://github.com/mhevery",
"followers_url": "https://api.github.com/users/mhevery/followers",
"following_url": "https://api.github.com/users/mhevery/following{/other_user}",
"gists_url": "https://api.github.com/users/mhevery/gists{/gist_id}",
"starred_url": "https://api.github.com/users/mhevery/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/mhevery/subscriptions",
"organizations_url": "https://api.github.com/users/mhevery/orgs",
"repos_url": "https://api.github.com/users/mhevery/repos",
"events_url": "https://api.github.com/users/mhevery/events{/privacy}",
"received_events_url": "https://api.github.com/users/mhevery/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"url": "https://api.github.com/repos/angular/angular/commits/0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"html_url": "https://github.com/angular/angular/commit/0b3e4fa090eca6382d601253854f7aa4ba47a16a"
}
]
},
{
"sha": "0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"commit": {
"author": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T17:10:07Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T18:22:21Z"
},
"message": "refactor(core): move `ViewEncapsulation` and `ViewType` to the right places\n\nCloses #4526",
"tree": {
"sha": "e764a366889a7bb5a668ace1352b1726ee39b7fd",
"url": "https://api.github.com/repos/angular/angular/git/trees/e764a366889a7bb5a668ace1352b1726ee39b7fd"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"html_url": "https://github.com/angular/angular/commit/0b3e4fa090eca6382d601253854f7aa4ba47a16a",
"comments_url": "https://api.github.com/repos/angular/angular/commits/0b3e4fa090eca6382d601253854f7aa4ba47a16a/comments",
"author": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "0299d4af0013308f1a303b5df16a99e61b6fabda",
"url": "https://api.github.com/repos/angular/angular/commits/0299d4af0013308f1a303b5df16a99e61b6fabda",
"html_url": "https://github.com/angular/angular/commit/0299d4af0013308f1a303b5df16a99e61b6fabda"
}
]
},
{
"sha": "0299d4af0013308f1a303b5df16a99e61b6fabda",
"commit": {
"author": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T16:43:00Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T17:34:42Z"
},
"message": "fix(core): keep styles for `ViewEncapsulation.Native` isolated per component\n\nBREAKING CHANGE:\n- `Renderer.registerComponent` now takes an additional argument.\n\nFixes #4513\nCloses #4524",
"tree": {
"sha": "37b75a131d18b6cd56d3fbfb37b79bc3e95981f5",
"url": "https://api.github.com/repos/angular/angular/git/trees/37b75a131d18b6cd56d3fbfb37b79bc3e95981f5"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/0299d4af0013308f1a303b5df16a99e61b6fabda",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/0299d4af0013308f1a303b5df16a99e61b6fabda",
"html_url": "https://github.com/angular/angular/commit/0299d4af0013308f1a303b5df16a99e61b6fabda",
"comments_url": "https://api.github.com/repos/angular/angular/commits/0299d4af0013308f1a303b5df16a99e61b6fabda/comments",
"author": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"url": "https://api.github.com/repos/angular/angular/commits/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"html_url": "https://github.com/angular/angular/commit/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac"
}
]
},
{
"sha": "a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"commit": {
"author": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T16:49:05Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T17:33:58Z"
},
"message": "fix(core): set `ViewEncapsulation.Emulated` as the default again\n\nFixes #4494",
"tree": {
"sha": "100402e11e5cf490e433b5545b3be77695fef8e1",
"url": "https://api.github.com/repos/angular/angular/git/trees/100402e11e5cf490e433b5545b3be77695fef8e1"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"html_url": "https://github.com/angular/angular/commit/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac",
"comments_url": "https://api.github.com/repos/angular/angular/commits/a9aef8e5e6c29fe1f52a66bc510dab630f62e1ac/comments",
"author": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"url": "https://api.github.com/repos/angular/angular/commits/6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"html_url": "https://github.com/angular/angular/commit/6fe8b85295dea0a22a40b7f42444c1524230bfb4"
}
]
},
{
"sha": "6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"commit": {
"author": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-04T21:53:45Z"
},
"committer": {
"name": "Tobias Bosch",
"email": "tbosch1009@gmail.com",
"date": "2015-10-05T17:10:47Z"
},
"message": "fix(render): keep bindings of components in content and view in the right order\n\nBindings in the component view have to be first, before \nbindings of components in the light dom (i.e. have the same\norder as used in the `ViewManagerUtils.createView()` method.\n\nFixes #4522\nCloses #4523",
"tree": {
"sha": "6a220cbd1ff2cecb391a4c403aab440e12a8f78e",
"url": "https://api.github.com/repos/angular/angular/git/trees/6a220cbd1ff2cecb391a4c403aab440e12a8f78e"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"html_url": "https://github.com/angular/angular/commit/6fe8b85295dea0a22a40b7f42444c1524230bfb4",
"comments_url": "https://api.github.com/repos/angular/angular/commits/6fe8b85295dea0a22a40b7f42444c1524230bfb4/comments",
"author": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "tbosch",
"id": 690815,
"avatar_url": "https://avatars.githubusercontent.com/u/690815?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/tbosch",
"html_url": "https://github.com/tbosch",
"followers_url": "https://api.github.com/users/tbosch/followers",
"following_url": "https://api.github.com/users/tbosch/following{/other_user}",
"gists_url": "https://api.github.com/users/tbosch/gists{/gist_id}",
"starred_url": "https://api.github.com/users/tbosch/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/tbosch/subscriptions",
"organizations_url": "https://api.github.com/users/tbosch/orgs",
"repos_url": "https://api.github.com/users/tbosch/repos",
"events_url": "https://api.github.com/users/tbosch/events{/privacy}",
"received_events_url": "https://api.github.com/users/tbosch/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "649d310c3105fb0ad0450e5f154ddf2732a770ae",
"url": "https://api.github.com/repos/angular/angular/commits/649d310c3105fb0ad0450e5f154ddf2732a770ae",
"html_url": "https://github.com/angular/angular/commit/649d310c3105fb0ad0450e5f154ddf2732a770ae"
}
]
},
{
"sha": "649d310c3105fb0ad0450e5f154ddf2732a770ae",
"commit": {
"author": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-03T14:53:40Z"
},
"committer": {
"name": "Pawel Kozlowski",
"email": "pkozlowski.opensource@gmail.com",
"date": "2015-10-05T02:47:49Z"
},
"message": "chore: remove traceur from package.json published to npm\n\nCloses #4498",
"tree": {
"sha": "bc0c9416eab5c90675af0238c4574601a3e0e749",
"url": "https://api.github.com/repos/angular/angular/git/trees/bc0c9416eab5c90675af0238c4574601a3e0e749"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/649d310c3105fb0ad0450e5f154ddf2732a770ae",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/649d310c3105fb0ad0450e5f154ddf2732a770ae",
"html_url": "https://github.com/angular/angular/commit/649d310c3105fb0ad0450e5f154ddf2732a770ae",
"comments_url": "https://api.github.com/repos/angular/angular/commits/649d310c3105fb0ad0450e5f154ddf2732a770ae/comments",
"author": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "pkozlowski-opensource",
"id": 973550,
"avatar_url": "https://avatars.githubusercontent.com/u/973550?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/pkozlowski-opensource",
"html_url": "https://github.com/pkozlowski-opensource",
"followers_url": "https://api.github.com/users/pkozlowski-opensource/followers",
"following_url": "https://api.github.com/users/pkozlowski-opensource/following{/other_user}",
"gists_url": "https://api.github.com/users/pkozlowski-opensource/gists{/gist_id}",
"starred_url": "https://api.github.com/users/pkozlowski-opensource/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/pkozlowski-opensource/subscriptions",
"organizations_url": "https://api.github.com/users/pkozlowski-opensource/orgs",
"repos_url": "https://api.github.com/users/pkozlowski-opensource/repos",
"events_url": "https://api.github.com/users/pkozlowski-opensource/events{/privacy}",
"received_events_url": "https://api.github.com/users/pkozlowski-opensource/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "14b194ea21e175e324ecfdf509c505b60528bf70",
"url": "https://api.github.com/repos/angular/angular/commits/14b194ea21e175e324ecfdf509c505b60528bf70",
"html_url": "https://github.com/angular/angular/commit/14b194ea21e175e324ecfdf509c505b60528bf70"
}
]
},
{
"sha": "14b194ea21e175e324ecfdf509c505b60528bf70",
"commit": {
"author": {
"name": "Julie Ralph",
"email": "ju.ralph@gmail.com",
"date": "2015-10-01T22:05:56Z"
},
"committer": {
"name": "Julie Ralph",
"email": "ju.ralph@gmail.com",
"date": "2015-10-05T02:18:47Z"
},
"message": "chore(ci): update sauce connect to 4.3.11\n\nFrom 4.3.8.\n\nCloses #4453",
"tree": {
"sha": "9446bb94b65b282475b80273e7f4f5bd576f2a38",
"url": "https://api.github.com/repos/angular/angular/git/trees/9446bb94b65b282475b80273e7f4f5bd576f2a38"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/14b194ea21e175e324ecfdf509c505b60528bf70",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/14b194ea21e175e324ecfdf509c505b60528bf70",
"html_url": "https://github.com/angular/angular/commit/14b194ea21e175e324ecfdf509c505b60528bf70",
"comments_url": "https://api.github.com/repos/angular/angular/commits/14b194ea21e175e324ecfdf509c505b60528bf70/comments",
"author": {
"login": "juliemr",
"id": 2081709,
"avatar_url": "https://avatars.githubusercontent.com/u/2081709?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/juliemr",
"html_url": "https://github.com/juliemr",
"followers_url": "https://api.github.com/users/juliemr/followers",
"following_url": "https://api.github.com/users/juliemr/following{/other_user}",
"gists_url": "https://api.github.com/users/juliemr/gists{/gist_id}",
"starred_url": "https://api.github.com/users/juliemr/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/juliemr/subscriptions",
"organizations_url": "https://api.github.com/users/juliemr/orgs",
"repos_url": "https://api.github.com/users/juliemr/repos",
"events_url": "https://api.github.com/users/juliemr/events{/privacy}",
"received_events_url": "https://api.github.com/users/juliemr/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "juliemr",
"id": 2081709,
"avatar_url": "https://avatars.githubusercontent.com/u/2081709?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/juliemr",
"html_url": "https://github.com/juliemr",
"followers_url": "https://api.github.com/users/juliemr/followers",
"following_url": "https://api.github.com/users/juliemr/following{/other_user}",
"gists_url": "https://api.github.com/users/juliemr/gists{/gist_id}",
"starred_url": "https://api.github.com/users/juliemr/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/juliemr/subscriptions",
"organizations_url": "https://api.github.com/users/juliemr/orgs",
"repos_url": "https://api.github.com/users/juliemr/repos",
"events_url": "https://api.github.com/users/juliemr/events{/privacy}",
"received_events_url": "https://api.github.com/users/juliemr/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "758efba34bb347991991e780ed31130e642e65ab",
"url": "https://api.github.com/repos/angular/angular/commits/758efba34bb347991991e780ed31130e642e65ab",
"html_url": "https://github.com/angular/angular/commit/758efba34bb347991991e780ed31130e642e65ab"
}
]
},
{
"sha": "758efba34bb347991991e780ed31130e642e65ab",
"commit": {
"author": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-09-27T03:26:02Z"
},
"committer": {
"name": "Igor Minar",
"email": "igor@angularjs.org",
"date": "2015-10-03T21:33:58Z"
},
"message": "fix(gulp): use the new karma.Server api\n\nCloses #4375",
"tree": {
"sha": "f94b0bb60cc10191471af3ee2e58c11554bdb228",
"url": "https://api.github.com/repos/angular/angular/git/trees/f94b0bb60cc10191471af3ee2e58c11554bdb228"
},
"url": "https://api.github.com/repos/angular/angular/git/commits/758efba34bb347991991e780ed31130e642e65ab",
"comment_count": 0
},
"url": "https://api.github.com/repos/angular/angular/commits/758efba34bb347991991e780ed31130e642e65ab",
"html_url": "https://github.com/angular/angular/commit/758efba34bb347991991e780ed31130e642e65ab",
"comments_url": "https://api.github.com/repos/angular/angular/commits/758efba34bb347991991e780ed31130e642e65ab/comments",
"author": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"committer": {
"login": "IgorMinar",
"id": 216296,
"avatar_url": "https://avatars.githubusercontent.com/u/216296?v=3",
"gravatar_id": "",
"url": "https://api.github.com/users/IgorMinar",
"html_url": "https://github.com/IgorMinar",
"followers_url": "https://api.github.com/users/IgorMinar/followers",
"following_url": "https://api.github.com/users/IgorMinar/following{/other_user}",
"gists_url": "https://api.github.com/users/IgorMinar/gists{/gist_id}",
"starred_url": "https://api.github.com/users/IgorMinar/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/IgorMinar/subscriptions",
"organizations_url": "https://api.github.com/users/IgorMinar/orgs",
"repos_url": "https://api.github.com/users/IgorMinar/repos",
"events_url": "https://api.github.com/users/IgorMinar/events{/privacy}",
"received_events_url": "https://api.github.com/users/IgorMinar/received_events",
"type": "User",
"site_admin": false
},
"parents": [
{
"sha": "e21bf120b9e96b892059d3e064b9312e5c1f7566",
"url": "https://api.github.com/repos/angular/angular/commits/e21bf120b9e96b892059d3e064b9312e5c1f7566",
"html_url": "https://github.com/angular/angular/commit/e21bf120b9e96b892059d3e064b9312e5c1f7566"
}
]
}
];
	
}
