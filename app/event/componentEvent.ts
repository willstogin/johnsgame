import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Event } from './event';
import { Group } from '../group/group';


@Component({
    selector: 'component-event',
    providers: [AppService],
    template: `
    <div>
        {{event.title}}
        <ul>
            <li *ngFor="let choice of event.choices">
                <div>
                    <component-choice [choice]='choice'></component-choice>
                </div>
            </li>
        </ul>
    </div>
    `


})
export class ComponentEvent {
    group: Group = new Group();
    event: Event = new Event('');
    constructor(appService: AppService) {
        appService.getEvent(this.group).then((event: Event) => this.event = event);
    }


}
