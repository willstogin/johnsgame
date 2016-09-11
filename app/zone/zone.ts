import { Group } from '../group/group';
import { Player } from '../player/player';
import { Event } from '../event/event';

export class Zone {
    landmarks: Array<string>;
    events: { [key:number]:Event; };

    constructor(landMarks: string[], events: { [key:number]:Event; }) {
        this.landmarks = landMarks;
        this.events = events;
    }

}