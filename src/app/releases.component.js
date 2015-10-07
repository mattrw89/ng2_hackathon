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
var github_http_service_1 = require('./github.http.service');
var angular2_1 = require('angular2/angular2');
var ReleasesComponent = (function () {
    function ReleasesComponent(tagsService) {
        this.tagsService = tagsService;
        this.name = 'john';
        this.message = '';
        this.tagsList = [];
    }
    ReleasesComponent.prototype.sayHello = function () {
        this.message = 'Hello ' + this.name + '!';
    };
    ReleasesComponent.prototype.getTags = function () {
        var _this = this;
        this.tagsList = [];
        this.tagsService.getTags()
            .then(function (tagData) {
            _this.tagsList = tagData;
            console.log('getTags returned');
            console.log(tagData);
            console.log(_this.tagsList);
        });
    };
    ReleasesComponent.prototype.onInit = function () {
        this.getTags();
    };
    ReleasesComponent = __decorate([
        angular2_1.Component({ selector: 'releases' }),
        angular2_1.View({
            template: "\n        <h2>Releases</h2>\n        <ul class=\"list-group\">\n            <li class=\"list-group-item\" *ng-for=\"#release of tagsList\">\n                <a href=\"{{release.commit.url}}\"> {{release.name}}</a>\n            </li>\n        </ul>\n            \n    ",
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [github_http_service_1.GithubHTTPTagsService])
    ], ReleasesComponent);
    return ReleasesComponent;
})();
exports.ReleasesComponent = ReleasesComponent;
//# sourceMappingURL=releases.component.js.map