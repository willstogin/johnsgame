import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { ZoneType } from '../zone/zone-type';
import { Player } from '../player/player';
import { Group } from '../group/group';


@Component({
    selector: 'component-apigroup',
    template: `
    Hi mom\n
            <*ngFor="let player of groups[0].players">
                <div>
                {{player.name}} {{player.health}} {{player.water}}
                </div>
    `
})

export class ComponentApiGroup {
    groups: Group[] = new Array();
    constructor() {
        var g: Group = new Group();
        g.addPlayer(new Player("p1"));
        g.addPlayer(new Player("p2"));

        this.groups[0] = g;
    }
}

