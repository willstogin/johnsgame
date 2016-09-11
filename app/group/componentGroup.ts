import { Component } from '@angular/core';
import { Group } from './group';
import { AppService } from '../app.service';


@Component({
    selector: 'component-group',
    providers: [AppService],
    template: `
    <div>
        <ul>
            <li *ngFor="let player of group.players">
                <div>
                {{player.name}} {{player.health}} {{player.water}}
                </div>
            </li>
        </ul>
    </div>
    `
})
export class ComponentGroup {
    group: Group = new Group();
    constructor(appService: AppService) {
        appService.getGroup().then(group => this.group = group);
    }


}
