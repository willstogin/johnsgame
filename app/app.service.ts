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
    leaveGroup(player: Player): Promise<boolean> {
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

    // Adds a player to a given group, removing it from the old group
    // Returns true on success, false otherwise
    joinGroup(player: Player, newGroup: Group): Promise<boolean> {
        let removeGroup: Group = null;
        // Find the group that the player belongs to
        this.groupList.forEach(group => {
            if (group.has(player)) {
                // Group with player found, keep reference to this group
                removeGroup = group;
            }
        })

        if (removeGroup != null) {
            removeGroup.splitPlayerFromGroup(player);
            newGroup.addPlayer(player);
            return Promise.resolve(true);
        }
        return Promise.resolve(false);
    }

    // Changes all the players of the first group to the second group
    // WARNING: This function is not safe currently
    // returns: True on full success, false otherwise
    mergeGroups(g1: Group, g2: Group): Promise<Boolean> {
        let success: boolean = true;
        g1.players.forEach(player => {
            this.joinGroup(player, g2).then(result => success = success && result);
        });
        return Promise.resolve(success);
    }


    getEvent(g: Group): Promise<Event> {
        // TODO: look for which zone the group is in
        // TODO: Generate an event for that zone
        const e: Event = new Event('Test');
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
