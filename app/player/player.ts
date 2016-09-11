export class Player {
    private name: String;
    private health: number;
    private water: number;

    constructor($name: String) {
        this.name = $name;
        this.health = 5;
        this.water = 20;
    }

    public get $name(): String {
        return this.name;
    }

    public set $name(value: String) {
        this.name = value;
    }

}
