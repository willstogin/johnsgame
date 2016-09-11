import { Component } from '@angular/core';
import { Group } from './group';

@Component({
    selector: 'component-group',
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

    constructor(group: Group) {
        this._group = group;
    }


}
