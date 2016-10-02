import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Player } from '../player/player';


@Component({
    selector: 'component-login',
    providers: [AppService],
    template: `
 <form (ngSubmit)="onSubmit()">
      <div class="form-group">
        <label for="name">Username</label>
        <input type="text" class="form-control" id="name" required
        [(ngModel)]="model.name" name="name"
        >
      </div>
      <button type="submit" class="btn btn-default">Submit</button>
</form>
{{diagnostic}}
    `

})


export class ComponentLogin {
    model = new Player('');
    private _appService: AppService;

    constructor(appService: AppService) {
        this._appService = appService;
    }

    private onSubmit(): void {
        console.log("Model: " + this.model.toString());
        console.log("submitting");
        this._appService.addPlayer(this.model);
    }

    get diagnostic() { return JSON.stringify(this.model); }
}
