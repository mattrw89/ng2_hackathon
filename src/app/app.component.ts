import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {ReleasesComponent} from './releases.component';
import {CommitsComponent} from './commits.component';
import {NameGeneratorComponent} from './nameGenerator.component';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['./Dashboard']">Dashboard</a>
    <a [router-link]="['./Releases']">Releases</a>
    <a [router-link]="['./Commits']">Commits</a>
    <a [router-link]="['./NameGenerator']">Name Generator</a>
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
export class AppComponent { }
