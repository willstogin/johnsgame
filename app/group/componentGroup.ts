import { Component } from '@angular/core';
import { Group } from './group';
import { AppService } from '../app.service';
import { Observable } from 'rxjs/Observable';
import { Player } from '../player/player';

@Component({
    selector: 'component-group',
    providers: [AppService],
    template: `
      <button (click)="onSubmit()">refresh</button>
    <div>
        <ul>
            <li *ngFor="let g of groups | async">
                <div>
                {{g.zone}}
                <li *ngFor="let p of g.players">
                {{p.name}}
                </li>
                </div>
            </li>
        </ul>
    </div>
    `
})
export class ComponentGroup {    values: number[] = [];

    private groups: Observable<Group[]>;
    private gps: Group[];

    constructor(private appService: AppService) {

        this.gps = new Array();
        var g: Group = new Group();
        g.addPlayer(new Player("Hello"));
        g.addPlayer(new Player("World"));
        console.log("G zone: " + g.zone);
        this.gps.push(g);
    }

    ngOnInit() {

        this.groups = this.appService.groupList$;
        this.appService.loadGroups();

        console.log(this.groups);
    }
      onSubmit() {
          this.appService.loadGroups();
    }
}
