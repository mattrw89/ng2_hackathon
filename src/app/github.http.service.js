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
var http_1 = require('angular2/http');
var angular2_1 = require('angular2/angular2');
var GithubHTTPTagsService = (function () {
    function GithubHTTPTagsService(_http) {
        this._http = _http;
        this.tags = [];
    }
    GithubHTTPTagsService.prototype.getTags = function () {
        // this._http.get('people.json').toRx().subscribe((res: any) => {
        // 	this.people = res.json();
        // });
        var _this = this;
        this.tags.length = 0;
        var promise = this._http.get('https://api.github.com/repos/angular/angular/tags?access_token=c131f0b1df3d040bf0da7aa807b81f74ecac49ba&scope=public_repo&token_type=bearer')
            .map(function (response) { return response.json(); }).toPromise()
            .then(function (tags) {
            (_a = _this.tags).push.apply(_a, tags);
            return _this.tags;
            var _a;
        })
            .then(function (_) { return _; }, function (e) { return _this._fetchFailed(e); });
        return promise;
    };
    GithubHTTPTagsService.prototype._fetchFailed = function (error) {
        console.error(error);
        return Promise.reject(error);
    };
    GithubHTTPTagsService.prototype.getTag = function (name) {
        return this.getTags().then(function (tags) {
            return tags.filter(function (t) {
                return t.name === name;
            })[0];
        });
    };
    GithubHTTPTagsService = __decorate([
        angular2_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GithubHTTPTagsService);
    return GithubHTTPTagsService;
})();
exports.GithubHTTPTagsService = GithubHTTPTagsService;
//# sourceMappingURL=github.http.service.js.map