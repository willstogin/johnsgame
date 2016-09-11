import { Component } from '@angular/core';
import { Player } from './player';

@Component({
    selector: 'component-player',
    template: `{{_player.name}} {{_player.health}} {{_player.water}}`
})
export class ComponentPlayer {
    private _player: Player;
    constructor(player: Player) {
        this._player = player;
    }

}

