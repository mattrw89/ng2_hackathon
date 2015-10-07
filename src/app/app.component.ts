import {View, Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {CharactersComponent} from './characters.component';
import {DashboardComponent} from './dashboard.component';
import {ReleasesComponent} from './releases.component';

@Component({ selector: 'my-app' })
@View({
  template: `
    <a [router-link]="['./Dashboard']">Dashboard</a>
    <a [router-link]="['./Characters']">Characters</a>
    <a [router-link]="['./Releases']">Releases</a>
    <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', as: 'Dashboard', component: DashboardComponent },
  { path: '/characters', as: 'Characters', component: CharactersComponent },
  { path: '/releases', as: 'Releases', component: ReleasesComponent }
])
export class AppComponent { }