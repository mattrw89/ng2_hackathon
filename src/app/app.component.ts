

import {View, Component, OnInit} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {ReleasesComponent} from './releases.component';
import {CommitsComponent} from './commits.component';
import {NameGeneratorComponent} from './nameGenerator.component';


declare var OAuth: any;

@Component({ selector: 'my-app' })
@View({
template: `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <div>
      <ul class="nav navbar-nav">
		<li><a [router-link]="['./Dashboard']">Dashboard</a></li>
    	<li><a [router-link]="['./Releases']">Releases</a></li>
    	<li><a [router-link]="['./Commits']">Commits</a></li>
    	<li><a [router-link]="['./NameGenerator']">Name Generator</a></li>
      </ul>
    </div>
  </div>
</nav>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent },  
  { path: '/releases', as: 'Releases', component: ReleasesComponent },
  { path: '/commits', as: 'Commits', component: CommitsComponent },
  { path: '/namegenerator', as: 'NameGenerator', component: NameGeneratorComponent }
])
export class AppComponent implements OnInit {
    onInit() {
		// console.log('OnInit');
  //       window.oauth.initialize('MoejKc6sCMhBG38Sicb-qY8_2rs');
		// window.oauth.popup('github').done(function(result: any) {
		// 	console.log(result);
		// 	// do some stuff with result
		// });
    }
}
