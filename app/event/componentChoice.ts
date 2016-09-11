import { Component, Input } from '@angular/core';

@Component({
    selector: 'component-choice',
    template: `
    <button>{{title}}</button>
    `
})
export class ComponentChoice {
    @Input() title: string;

}
