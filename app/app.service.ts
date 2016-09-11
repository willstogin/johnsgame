import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    getUserList(): string[] {
        return ["Hi", "mom"]
    }

}
