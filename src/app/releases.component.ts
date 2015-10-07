import {GithubHTTPTagsService} from './github.http.service';
import {GithubTag} from './github_tag';
import {Component, FORM_DIRECTIVES, View, CORE_DIRECTIVES} from 'angular2/angular2';

@Component({ selector: 'releases' })
@View({
	template: `
		<h2>Releases</h2>	
		<ul>
			<li *ng-for="#release of releases">
				<a href="{{release.commit.url}}"> {{release.name}}</a>
			</li>
		</ul>
			
	`,
	directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ReleasesComponent {
	public name = 'john';
	public message = '';
	public tagsList: Array<GithubTag> = [];

	constructor(private tagsService: GithubHTTPTagsService) {
		this.getTags();
	}

	public releases = [
{
"name": "starting",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/starting",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/starting",
"commit": {
"sha": "2800683e644b9d0fdee9d0a393570608beebc1c0",
"url": "https://api.github.com/repos/angular/angular/commits/2800683e644b9d0fdee9d0a393570608beebc1c0"
}
},
{
"name": "2.0.0-alpha.39",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.39",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.39",
"commit": {
"sha": "7d5c3eb001b25ff06143dfab03c9422f56ebb10d",
"url": "https://api.github.com/repos/angular/angular/commits/7d5c3eb001b25ff06143dfab03c9422f56ebb10d"
}
},
{
"name": "2.0.0-alpha.38",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.38",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.38",
"commit": {
"sha": "f77234e6bd1d75bcfa846728971cc1588bdf8cd3",
"url": "https://api.github.com/repos/angular/angular/commits/f77234e6bd1d75bcfa846728971cc1588bdf8cd3"
}
},
{
"name": "2.0.0-alpha.37",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.37",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.37",
"commit": {
"sha": "7374153db562fecad3490f5bf8ad8193523ab21a",
"url": "https://api.github.com/repos/angular/angular/commits/7374153db562fecad3490f5bf8ad8193523ab21a"
}
},
{
"name": "2.0.0-alpha.36",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.36",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.36",
"commit": {
"sha": "77ccc1ca0c5642c7d4aacc9b8eda649fcccd2a26",
"url": "https://api.github.com/repos/angular/angular/commits/77ccc1ca0c5642c7d4aacc9b8eda649fcccd2a26"
}
},
{
"name": "2.0.0-alpha.35",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.35",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.35",
"commit": {
"sha": "5f7d4faa8872f784f895248dcae795cdbaf58d8a",
"url": "https://api.github.com/repos/angular/angular/commits/5f7d4faa8872f784f895248dcae795cdbaf58d8a"
}
},
{
"name": "2.0.0-alpha.34",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.34",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.34",
"commit": {
"sha": "450d3630cc2eb5afdbb535334d647a830badf91c",
"url": "https://api.github.com/repos/angular/angular/commits/450d3630cc2eb5afdbb535334d647a830badf91c"
}
},
{
"name": "2.0.0-alpha.33",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.33",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.33",
"commit": {
"sha": "aae5a4cece5a5185cbde63bb49f53ea5281815be",
"url": "https://api.github.com/repos/angular/angular/commits/aae5a4cece5a5185cbde63bb49f53ea5281815be"
}
},
{
"name": "2.0.0-alpha.32",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.32",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.32",
"commit": {
"sha": "6f4a39c337f85a63d379da349855814a623ce28e",
"url": "https://api.github.com/repos/angular/angular/commits/6f4a39c337f85a63d379da349855814a623ce28e"
}
},
{
"name": "2.0.0-alpha.31",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.31",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.31",
"commit": {
"sha": "34993f76917e229048343cb8a41699487412da78",
"url": "https://api.github.com/repos/angular/angular/commits/34993f76917e229048343cb8a41699487412da78"
}
},
{
"name": "2.0.0-alpha.30",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.30",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.30",
"commit": {
"sha": "6c933a448531751d138df1437ccd0299c6b6ed11",
"url": "https://api.github.com/repos/angular/angular/commits/6c933a448531751d138df1437ccd0299c6b6ed11"
}
},
{
"name": "2.0.0-alpha.29",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.29",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.29",
"commit": {
"sha": "46bb4e37ba23866eaf71b4288130962897bd5350",
"url": "https://api.github.com/repos/angular/angular/commits/46bb4e37ba23866eaf71b4288130962897bd5350"
}
},
{
"name": "2.0.0-alpha.28",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.28",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.28",
"commit": {
"sha": "19a9dc67bddd411c0e1a2ae5b9d743e962e4ca4f",
"url": "https://api.github.com/repos/angular/angular/commits/19a9dc67bddd411c0e1a2ae5b9d743e962e4ca4f"
}
},
{
"name": "2.0.0-alpha.27",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.27",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.27",
"commit": {
"sha": "f93aae4802e514ab77912d05794bf650e82524cc",
"url": "https://api.github.com/repos/angular/angular/commits/f93aae4802e514ab77912d05794bf650e82524cc"
}
},
{
"name": "2.0.0-alpha.26",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.26",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.26",
"commit": {
"sha": "d53c898499a544d08f0db7494bac2d22f66c270f",
"url": "https://api.github.com/repos/angular/angular/commits/d53c898499a544d08f0db7494bac2d22f66c270f"
}
},
{
"name": "2.0.0-alpha.25",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.25",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.25",
"commit": {
"sha": "c28952c707ff15a522b8f80336da61038ce39a59",
"url": "https://api.github.com/repos/angular/angular/commits/c28952c707ff15a522b8f80336da61038ce39a59"
}
},
{
"name": "2.0.0-alpha.24",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.24",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.24",
"commit": {
"sha": "adaa157317da4305e659c41e44f664023aacc12d",
"url": "https://api.github.com/repos/angular/angular/commits/adaa157317da4305e659c41e44f664023aacc12d"
}
},
{
"name": "2.0.0-alpha.23",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.23",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.23",
"commit": {
"sha": "7dc524ed5888c217ba40f721ccc1494193432d66",
"url": "https://api.github.com/repos/angular/angular/commits/7dc524ed5888c217ba40f721ccc1494193432d66"
}
},
{
"name": "2.0.0-alpha.22",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.22",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.22",
"commit": {
"sha": "f0ef72d6cc95802ea62b233323e239f5dbbe8d9a",
"url": "https://api.github.com/repos/angular/angular/commits/f0ef72d6cc95802ea62b233323e239f5dbbe8d9a"
}
},
{
"name": "2.0.0-alpha.21",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.21",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.21",
"commit": {
"sha": "b72eb0783b24a785c34d4f74e667c224adb36b12",
"url": "https://api.github.com/repos/angular/angular/commits/b72eb0783b24a785c34d4f74e667c224adb36b12"
}
},
{
"name": "2.0.0-alpha.20",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.20",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.20",
"commit": {
"sha": "fe70c2647a2c30b49d17a5a53b85672afcf55aef",
"url": "https://api.github.com/repos/angular/angular/commits/fe70c2647a2c30b49d17a5a53b85672afcf55aef"
}
},
{
"name": "2.0.0-alpha.19",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.19",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.19",
"commit": {
"sha": "7d29636087dbb9964f6c5a2bfe61032bed73db39",
"url": "https://api.github.com/repos/angular/angular/commits/7d29636087dbb9964f6c5a2bfe61032bed73db39"
}
},
{
"name": "2.0.0-alpha.18",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.18",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.18",
"commit": {
"sha": "dbffa88dc2ba6ab49c706c6fe1e5dcb0f3b19ed9",
"url": "https://api.github.com/repos/angular/angular/commits/dbffa88dc2ba6ab49c706c6fe1e5dcb0f3b19ed9"
}
},
{
"name": "2.0.0-alpha.17",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.17",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.17",
"commit": {
"sha": "50f8892c6bb8e33ec888fc4fd987d8b1bab19c54",
"url": "https://api.github.com/repos/angular/angular/commits/50f8892c6bb8e33ec888fc4fd987d8b1bab19c54"
}
},
{
"name": "2.0.0-alpha.16",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.16",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.16",
"commit": {
"sha": "acce69da754bfdd6eaf4a7fe0ff75e4e6c11a849",
"url": "https://api.github.com/repos/angular/angular/commits/acce69da754bfdd6eaf4a7fe0ff75e4e6c11a849"
}
},
{
"name": "2.0.0-alpha.15",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.15",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.15",
"commit": {
"sha": "81e6d13241d143b6e72a09530314db5a9e24aeaa",
"url": "https://api.github.com/repos/angular/angular/commits/81e6d13241d143b6e72a09530314db5a9e24aeaa"
}
},
{
"name": "2.0.0-alpha.14",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.14",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.14",
"commit": {
"sha": "1c9938ed9868259955b2d12c8ae541bf6dcbf09a",
"url": "https://api.github.com/repos/angular/angular/commits/1c9938ed9868259955b2d12c8ae541bf6dcbf09a"
}
},
{
"name": "2.0.0-alpha.13",
"zipball_url": "https://api.github.com/repos/angular/angular/zipball/2.0.0-alpha.13",
"tarball_url": "https://api.github.com/repos/angular/angular/tarball/2.0.0-alpha.13",
"commit": {
"sha": "da4862a0c82866e117ee3727f80b205c00da0710",
"url": "https://api.github.com/repos/angular/angular/commits/da4862a0c82866e117ee3727f80b205c00da0710"
}
}
];
	
	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}

	getTags() {
		this.tagsService.getTags()
			.then(function(tagData) {
				this.tagsList = tagData;
				console.log('getTags returned');
				console.log(tagData);
			});
	}
}
