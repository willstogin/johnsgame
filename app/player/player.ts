

export class Player {


    private name: string;
    private health: number;
    private water: number;

    public static isPlayer(player: string | Player ): player is Player {
        return (typeof player !== 'string');
    }

    constructor($name: string) {
        this.name = $name;
        this.health = 5;
        this.water = 20;
    }

    public get $name(): string {
        return this.name;
    }

    public set $name(value: string) {
        this.name = value;
    }



}

