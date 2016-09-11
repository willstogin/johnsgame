import { Player } from '../player/player.ts';
export class Group {

    private players: Array<Player>;
        constructor() {
            this.players = new Array<Player>();
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
}
