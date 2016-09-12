import { Player } from '../player/player';
import { ZoneType } from '../zone/zone-type';
export class Group {

    public players: Array<Player>;
    private zone: ZoneType;
    constructor() {
        this.players = new Array<Player>();
        this.zone = ZoneType.CRASHSITE;
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
    public setZone(zone: ZoneType) {
        this.zone = zone;
    }
    public getZone(): ZoneType {
        return this.zone;
    }

}
