import { Player } from '../player/player';
import { ZoneType } from '../zone/zone-type';
export class Group {

    public players: Array<Player>;
    private _zone: ZoneType;
    constructor() {
        this.players = new Array<Player>();
        this._zone = ZoneType.CRASHSITE;
    }
    public addPlayer(player: Player) {
        this.players.push(player);
    }
    public splitPlayerFromGroup(player: Player): Group {
        if (this.has(player)) {
            const newGroup: Group = new Group();
            newGroup.players.push(player);
            return newGroup;
        }
    }
    public has(player: Player): boolean {
        for (let existingPlayer of this.players) {
            if (existingPlayer === player) {
                return true;
            }
        }
        return false;
    }
    public set zone(zone: ZoneType) {
        this.zone = zone;
    }
    public get zone(): ZoneType {
        return this.zone;
    }

}
