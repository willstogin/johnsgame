export class Choice {
    public title: string;
    public voteCount: number;
    private _isSelected: boolean;

    constructor(title: string){
        this._isSelected = false;
        this.title = title;
    }

    public select(): void {
        if (this._isSelected){
            this.voteCount++;
        }
        this._isSelected = true;
    }
    public deSelect(): void {
        if (! this._isSelected){
            this.voteCount--;
        }
        this._isSelected = false;
    }
}