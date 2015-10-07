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
var dashboard_component_1 = require('./dashboard.component');
var releases_component_1 = require('./releases.component');
var commits_component_1 = require('./commits.component');
var nameGenerator_component_1 = require('./nameGenerator.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        angular2_1.Component({ selector: 'my-app' }),
        angular2_1.View({
            template: "\n    <a [router-link]=\"['./Dashboard']\">Dashboard</a>\n    <a [router-link]=\"['./Releases']\">Releases</a>\n    <a [router-link]=\"['./Commits']\">Commits</a>\n    <a [router-link]=\"['./NameGenerator']\">Name Generator</a>\n    <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'Dashboard', component: dashboard_component_1.DashboardComponent },
            { path: '/releases', as: 'Releases', component: releases_component_1.ReleasesComponent },
            { path: '/commits', as: 'Commits', component: commits_component_1.CommitsComponent },
            { path: '/namegenerator', as: 'NameGenerator', component: nameGenerator_component_1.NameGeneratorComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map