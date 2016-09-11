import { Component } from '@angular/core';
import { Player } from './player';
import { AppService } from '../app.service';

@Component({
    selector: 'component-player',
    providers: [AppService],
    template: `{{_player.name}} {{_player.health}} {{_player.water}}`
})
export class ComponentPlayer {
    private _player: Player;
    constructor(player: Player) {
        this._player = player;
    }

}

