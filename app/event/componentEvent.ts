import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Event } from './event';

@Component({
    selector: 'component-event',
    providers: [AppService],
    template: `
    <div>
        <ul>
            <li *ngFor="let choice of event.choice">
                <div>
                {{player.name}} {{player.health}} {{player.water}}
                </div>
            </li>
        </ul>
    </div>
    `
})
export class ComponentEvent {
    event: Event = new Event("");
    constructor(appService: AppService) {
        appService.getEvent().then(event => this.event = event);
    }


}
