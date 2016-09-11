import { Component, Input } from '@angular/core';
import { Choice } from './choice';

@Component({
    selector: 'component-choice',
    template: `
    <button (click)="choice.onClick()">{{choice.title}}</button>{{choice.voteCount}}
    `
})
export class ComponentChoice {
    @Input() choice: Choice;


}
