import { Injectable } from '@angular/core';
import { Player } from './player/player';
import { Group } from './group/group';
import { Zone } from './zone/zone';
import { CRASHSITE_LANDMARKS } from './zone/crashsite-landmarks';

enum WeatherStates {
    CLEAR,          // Default state of the weather
    PARTLY_CLOUDY,  // When someone triggers a storm, the weather is
                    // PARTLY_CLOUDY next turn
    CLOUDY,         // Next progression after PARTLY_CLOUDY
    STORMING        // Next progression after CLOUDY, return to CLEAR after
}

@Injectable()
export class AppService {

    // List of all the groups
    groupList: Array<Group> = new Array<Group>();
    // The current state of the weather
    weather: WeatherStates = WeatherStates.CLEAR;

    // Zones
    crashSite: Zone = new Zone(CRASHSITE_LANDMARKS);






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
