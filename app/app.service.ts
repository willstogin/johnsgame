import { Injectable } from '@angular/core';
import {Player} from './player/player';

@Injectable()
export class AppService {
playerList: Player[] = []


    getPlayerList(): Promise<string[]> {
        return Promise.resolve(playerList);
    }

    // Adds a player string to the list if it does not already exist
    // return: true if the player did not already exist, false otherwise
    addPlayer(): Promise<boolean> {

    }





}
