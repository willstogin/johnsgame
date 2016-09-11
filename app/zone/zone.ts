import { Group } from '../group/group';
import { Player } from '../player/player';


export class Zone {
    landmarks: Array<string>;

    constructor(landMarks: string[]) {
        this.landmarks = landMarks;
    }

}