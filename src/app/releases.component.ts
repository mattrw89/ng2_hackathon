import {GithubHTTPTagsService} from './github.http.service';
import {GithubTag} from './github_tag';
import {Component, FORM_DIRECTIVES, View, CORE_DIRECTIVES, OnInit} from 'angular2/angular2';

@Component({ selector: 'releases' })
@View({
    template: `
        <h2>Releases</h2>
        <ul>
            <li *ng-for="#release of tagsList">
                <a href="{{release.commit.url}}"> {{release.name}}</a>
            </li>
        </ul>
            
    `,
    directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class ReleasesComponent implements OnInit {
    public name = 'john';
    public message = '';
    public tagsList: Array<GithubTag> = [];

    constructor(private tagsService: GithubHTTPTagsService) {}
    
    sayHello() {
        this.message = 'Hello ' + this.name + '!';
    }

    getTags() {
        this.tagsList = [];
        this.tagsService.getTags()
            .then((tagData) => {
                this.tagsList = tagData;
                console.log('getTags returned');
                console.log(tagData);
                console.log(this.tagsList);
            });
    }

    onInit() {
        this.getTags();
    }
}
