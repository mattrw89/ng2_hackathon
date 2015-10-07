var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var character_service_1 = require('./character.service');
var app_component_1 = require('./app.component');
var github_http_service_1 = require('./github.http.service');
var http_1 = require('angular2/http');
angular2_1.bootstrap(app_component_1.AppComponent, [
    http_1.HTTP_BINDINGS,
    router_1.routerBindings(app_component_1.AppComponent),
    character_service_1.CharacterService,
    github_http_service_1.GithubHTTPTagsService,
    angular2_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map