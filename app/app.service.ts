import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, Observer, Subject } from 'rxjs/Rx';

// Custom classes
import { Player } from './player/player';
import { Group } from './group/group';
import { Zone } from './zone/zone';
import { ZoneType } from './zone/zone-type';
import { CRASHSITE_LANDMARKS } from './zone/crashsite/crashsite-landmarks';
import { CRASHSITE_EVENTS } from './zone/crashsite/crashsite-events';
import { Event } from './event/event';
import { Choice } from './event/choice';

enum WeatherStates {
    CLEAR,          // Default state of the weather
    PARTLY_CLOUDY,  // When someone triggers a storm, the weather is
                    // PARTLY_CLOUDY next turn
    CLOUDY,         // Next progression after PARTLY_CLOUDY
    STORMING        // Next progression after CLOUDY, return to CLEAR after
}

@Injectable()
export class AppService {

    // URL for api operations
    private baseUrl: string = "https://johnsgame.apispark.net/v1";

    private dataStore: {
        groups: Group[];
    };


    // List of all the groups
    private _groupList$: Subject<Group[]> = <Subject<Group[]>> new Subject();
    get groupList$() { return this._groupList$.asObservable(); }

    loadGroups() {
    console.log("Getting data from " + `${this.baseUrl}/groups`);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    var res = this.http.get(`${this.baseUrl}/groups`, options)
        .map((r:Response) => r.json())
        .subscribe( (data) =>{

        console.log("Data incoming" + data);
        this.dataStore.groups = data;
        this._groupList$.next(this.dataStore.groups)});
        // .catch((error:any) => Observable.throw(error.json().error));
    console.log("Res is:");
    console.log(res);
    // console.log(res.map((response: Response) => response.json()));
    // var gps: Group[] = new Array();
    // var g: Group = new Group();
    // g.addPlayer(new Player("Hello"));
    // g.addPlayer(new Player("World"));
    // gps.push(g);
    // this.dataStore.groups.push(g);
    // this._groupList$.next(this.dataStore.groups);




    // res.map(response => response.json()).subscribe(data => {
    //   this.dataStore.groups = data;
    //   console.log("Got some data!" + data);
    //   // Pushes a copy to all subscribers
    //   this._groupList$.next(this.dataStore.groups);
    //   console.log(this.dataStore.groups);
    // }, error => console.log(error));
    }

    // The current state of the weather
    weather: WeatherStates = WeatherStates.CLEAR;

    // Zones
    crashSite: Zone = new Zone(CRASHSITE_LANDMARKS, CRASHSITE_EVENTS);

    constructor(private http: Http) {
        this.dataStore = { groups: [] };
    }

    /* ************************** GROUP FUNCTIONS ************************** */
    // Group changing methods
    // Returns true on successful new group creation, false otherwise
    leaveGroup(player: Player): Promise<boolean> {
        // TODO: Update this function to use the API CRUD actions
        return Promise.resolve(false);



        // // Find the group
        // this.groupList.forEach(element => {
        //     if (element.has(player)) {
        //         // Group with player found, get new group
        //         const newGroup: Group = element.splitPlayerFromGroup(player);
        //         if (newGroup != null) {
        //             // Add new group to the list of groups
        //             this.groupList.push(newGroup);
        //             return Promise.resolve(true);
        //         }
        //     }
        // });
        // return Promise.resolve(false);
    }

    // Adds a player to a given group, removing it from the old group
    // Returns true on success, false otherwise
    joinGroup(player: Player, newGroup: Group): Promise<boolean> {
        // TODO: Update this function to use the new API

        // let removeGroup: Group = null;
        // // Find the group that the player belongs to
        // this.groupList.forEach(group => {
        //     if (group.has(player)) {
        //         // Group with player found, keep reference to this group
        //         removeGroup = group;
        //     }
        // });

        // if (removeGroup != null) {
        //     removeGroup.splitPlayerFromGroup(player);
        //     newGroup.addPlayer(player);
        //     return Promise.resolve(true);
        // }
        return Promise.resolve(false);
    }

    // Changes all the players of the first group to the second group
    // WARNING: This function is not safe currently
    // returns: True on full success, false otherwise
    mergeGroups(g1: Group, g2: Group): Promise<Boolean> {
        let success = true;
        g1.players.forEach(player => {
            this.joinGroup(player, g2).then(result => success = success && result);
        });
        return Promise.resolve(success);
    }


    /* ************************** EVENT FUNCTIONS ************************** */
    getEvent(g: Group): Promise<Event> {
        // Get the zone the group is in
        const zone: ZoneType = g.zone;
        // Generate an event for that zone (between 2 and 12)
        const roll = Math.floor(Math.random() * 10) + 2;
        let event: Event;
        switch (zone) {
            case ZoneType.CRASHSITE:
                event = this.crashSite.events[roll];
                break;
            default:
                // No default quite yet. That's coming ;)
        }
        // Todo: return the event rather than the test event



        const e: Event = new Event('Test');
        e.choices.push(new Choice(`do a barrel roll!`));
        e.choices.push(new Choice(`Don't do a barrel roll!`));

        return Promise.resolve(e);
    }

    /* *************************** ITEM FUNCTIONS *************************** */
    // TODO


    /// below this is temporary


    /* ************************* TESTING FUNCTIONS ************************* */
    group: Group = new Group();


    getGroup(): Observable<Group> {
        // this.group.addPlayer(new Player('armbar'));
        // this.group.addPlayer(new Player('weekendAtJoes'));
        // this.group.addPlayer(new Player('jimbob'));
        // this.groupList.map( (grp: Group) => {
        //     this.group.addPlayer(grp.players[0]);
        // })
        // this.group = this.group;

        return new Observable<Group>( (observer: Observer<Group>) => {
            observer.next(this.group);
            observer.complete();
        });

    }

    // Adds a player to the group if it does not already exist
    // return: true if the player did not already exist, false otherwise
    addPlayer(player: string | Player): Promise<boolean> {
        console.log("Adding player " + player.toString());
        const group: Group = new Group();
        if (Player.isPlayer(player)){
            group.addPlayer(player);
        } else {
            group.addPlayer(new Player(player));
        }

        this.dataStore.groups.push(group);
        this._groupList$.next(this.dataStore.groups);

        return Promise.resolve(false);
    }
}
