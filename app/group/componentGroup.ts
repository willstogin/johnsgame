import { Component } from '@angular/core';
import { Group } from './group';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';

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
export class ComponentGroup {    values: number[] = [];

    group: Group = new Group();

    constructor(appService: AppService) {
        let subscription = appService.getGroup().subscribe(
            value => this.group = value
        );
    }
}
