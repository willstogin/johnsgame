import { Component } from '@angular/core';
import { Group } from './group';
import { AppService } from '../app.service';


@Component({
    selector: 'component-group',
    providers: [AppService],
    template: `
    <div >
        <ul>
            <li *ngFor="let player of _group.players">
                {{player.name}}
            </li>
        </ul>
    </div>
    `
})
export class ComponentGroup {
    private _group: Group;

    constructor(appService: AppService) {
        appService.getGroup().then(group => this._group = group);
    }


}
