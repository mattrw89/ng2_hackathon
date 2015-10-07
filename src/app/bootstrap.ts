import {bind, bootstrap} from 'angular2/angular2';
import {routerBindings, HashLocationStrategy, LocationStrategy} from 'angular2/router';
import {CharacterService} from './character.service';
import {AppComponent} from './app.component';
import {GithubHTTPTagsService} from './github.http.service';
import {HTTP_BINDINGS} from 'angular2/http';

bootstrap(AppComponent, [
	HTTP_BINDINGS,
	routerBindings(AppComponent),
	CharacterService,
	GithubHTTPTagsService,
	bind(LocationStrategy).toClass(HashLocationStrategy)
]);
