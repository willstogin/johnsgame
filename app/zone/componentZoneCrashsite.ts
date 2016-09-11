import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
    selector: 'component-zone-crashsite',
    providers: [AppService],
    template: `<h1>My First Angular 2 App HI</h1>
    <h2>Players: {{players}}
               `
})
export class ComponentZoneCrashsite {
    players: string[];

    constructor(private appService: AppService) {}

    getPlayers(): void {
        this.appService.getPlayerList().then(players => this.players = players)
    }

    ngOnInit(): void {
        this.getPlayers();
    }
}

