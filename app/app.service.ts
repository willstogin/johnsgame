import { Injectable } from '@angular/core';
import {Player} from './player/player';
import {Group} from './group/group';

@Injectable()
export class AppService {
    group: Group = new Group();


    getGroup(): Promise<Group> {
        return Promise.resolve(this.group);
    }

    // Adds a player string to the list if it does not already exist
    // return: true if the player did not already exist, false otherwise
    addPlayer(player: Player): Promise<boolean> {


        return Promise.resolve(false);
    }





}
