import { Component } from '@angular/core';
import { AppService } from '../app.service';


@Component({
    selector: 'component-placeholder',
    template: `
    <router-outlet></router-outlet>
    `
})

export class ComponentParent {

    constructor() {}
}