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
                <ul>
                {{g.id}}
                <li *ngFor="let p of g.players">
                {{p}}
                </li>
                </ul>
                </div>
            </li>
        </ul>
    </div>
    `
})
export class ComponentGroup {    values: number[] = [];

    private groups: Observable<Group[]>;

    constructor(private appService: AppService) {
    }

    ngOnInit() {

        this.groups = this.appService.groupList$;
        this.appService.loadGroups();

        console.log(this.groups);
    }
    private boo: Boolean = true;
      onSubmit() {
        /*   if (this.boo) {
          this.appService.addPlayer("Hello");
          } else {
              this.appService.addPlayer("World");
          }
          this.boo = !this.boo;
          */
          this.appService.loadGroups();
    }
}
