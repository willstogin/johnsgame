import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    getPlayerList(): Promise<string[]> {
        return Promise.resolve(["Hi", "mom"]);
    }

}
