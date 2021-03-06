import {Http} from 'angular2/http';
import {Injectable} from 'angular2/angular2';
import {GithubTag} from './github_tag';

@Injectable()
export class GithubHTTPTagsService {
	tags: GithubTag[] = [];

	constructor(private _http: Http) { }

	getTags(): Promise<GithubTag[]> {
		// this._http.get('people.json').toRx().subscribe((res: any) => {
		// 	this.people = res.json();
		// });

		this.tags.length = 0;
		let promise = this._http.get('https://api.github.com/repos/angular/angular/tags?access_token=7a1bac753cb9b679e72e8fb91a29b16fa6bb6fe9&scope=public_repo&token_type=bearer')
			.map((response: any) => response.json()).toPromise()
			.then((tags: GithubTag[]) => {
				this.tags.push(...tags);
				return this.tags;
			})
		// //TODO: fix catch
		// //.catch(e => this._fetchFailed(e)) // want we want to say
		// // baroque way to ensure promise stays Promise<Hero[]>
		// .then<Character[]>(_ => _, e => this._fetchFailed(e));
			.then((_: any) => _, (e: any) => this._fetchFailed(e));
		return promise;
	}

	private _fetchFailed(error: any) {
		console.error(error);
		return Promise.reject(error);
	}

	getTag(name: string) {
		return this.getTags().then((tags) => {
			return tags.filter((t) => {
				return t.name === name;
			})[0]
		});
	}
}