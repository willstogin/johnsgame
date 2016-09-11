import { Choice  } from './choice';

export class Event {

    public choices: Array<Choice>;
    public title: string;
    constructor(title: string) {
        this.title = title;
        this.choices = new Array<Choice>();
    }

}
