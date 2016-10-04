import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ComponentZoneCrashsite } from './zone/crashsite/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';
import { ComponentGroup } from './group/componentGroup';
import { ComponentEvent } from './event/componentEvent';
import { ComponentChoice } from './event/componentChoice';
import { ComponentLogin } from './login/componentLogin';
import { ComponentPlaceholder } from './placeholder/componentPlaceholder';
import { ComponentParent } from './parent/componentParent';
import { ComponentApiGroup } from './api/apiComponentGroup';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    ComponentZoneCrashsite,
    ComponentPlayer,
    ComponentGroup,
    ComponentEvent,
    ComponentChoice,
    ComponentLogin,
    ComponentPlaceholder,
    ComponentParent,
    ComponentApiGroup,
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
