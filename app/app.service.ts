import { Injectable } from '@angular/core';
import { Player } from './player/player';
import { Group } from './group/group';
import { Zone } from './zone/zone';
import { CRASHSITE_LANDMARKS } from './zone/crashsite-landmarks';
import { Event } from './event/event';

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


    // Group changing methods
    // Returns true on successful new group creation, false otherwise
    startNewGroup(player: Player): Promise<boolean> {
        // Find the group
        this.groupList.forEach(element => {
            if (element.has(player)) {
                // Group with player found, get new group
                const newGroup: Group = element.splitPlayerFromGroup(player);
                if (newGroup != null) {
                    // Add new group to the list of groups
                    this.groupList.push(newGroup);
                    return Promise.resolve(true);
                }
            }
        });
        return Promise.resolve(false);
    }


    getEvent(g: Group): Promise<Event> {
        // TODO: look for which zone the group is in
        // TODO: Generate an event for that zone
        const e: Event = new Event("Test");
        return Promise.resolve(e);
    }




    group: Group = new Group();


    getGroup(): Promise<Group> {
        this.group.addPlayer(new Player('armbar'));
        this.group.addPlayer(new Player('weekendAtJoes'));
        this.group.addPlayer(new Player('jimbob'));
        return Promise.resolve(this.group);
    }

    // Adds a player to the group if it does not already exist
    // return: true if the player did not already exist, false otherwise
    addPlayer(player: Player): Promise<boolean> {


        return Promise.resolve(false);
    }









}
