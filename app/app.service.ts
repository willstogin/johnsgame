import { Injectable } from '@angular/core';
import { Player } from './player/player';
import { Group } from './group/group';
import Zone = require('./zone/zone');

enum WeatherStates {
    CLEAR,          // Default state of the weather
    PARTLY_CLOUDY,  // When someone triggers a storm, the weather is
                    // PARTLY_CLOUDY next turn
    CLOUDY,         // Next progression after PARTLY_CLOUDY
    STORMING        // Next progression after CLOUDY, return to CLEAR after
}

@Injectable()
export class AppService {

    groupList: Array<Group> = new Array<Group>();
    weather: WeatherStates = WeatherStates.CLEAR;






    group: Group = new Group();


    getGroup(): Promise<Group> {
        const player: Player = new Player('jimbob');
        this.group.addPlayer(player);
        return Promise.resolve(this.group);
    }

    // Adds a player to the group if it does not already exist
    // return: true if the player did not already exist, false otherwise
    addPlayer(player: Player): Promise<boolean> {


        return Promise.resolve(false);
    }









}
