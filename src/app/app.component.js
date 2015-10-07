var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var characters_component_1 = require('./characters.component');
var dashboard_component_1 = require('./dashboard.component');
var releases_component_1 = require('./releases.component');
var commits_component_1 = require('./commits.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.onInit = function () {
        // console.log('OnInit');
        //       window.oauth.initialize('MoejKc6sCMhBG38Sicb-qY8_2rs');
        // window.oauth.popup('github').done(function(result: any) {
        // 	console.log(result);
        // 	// do some stuff with result
        // });
    };
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'my-app' }),
        angular2_1.View({
            template: "\n<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"#\">WebSiteName</a>\n    </div>\n    <div>\n      <ul class=\"nav navbar-nav\">\n\t\t<li><a [router-link]=\"['./Dashboard']\">Dashboard</a></li>\n    \t<li><a [router-link]=\"['./Characters']\">Characters</a></li>\n    \t<li><a [router-link]=\"['./Releases']\">Releases</a></li>\n    \t<li><a [router-link]=\"['./Commits']\">Commits</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: dashboard_component_1.DashboardComponent },
            { path: '/characters', as: 'Characters', component: characters_component_1.CharactersComponent },
            { path: '/releases', as: 'Releases', component: releases_component_1.ReleasesComponent },
            { path: '/commits', as: 'Commits', component: commits_component_1.CommitsComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map