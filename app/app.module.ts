import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ComponentZoneCrashsite } from './zone/crashsite/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';
import { ComponentGroup } from './group/componentGroup';
import { ComponentEvent } from './event/componentEvent';
import { ComponentChoice } from './event/componentChoice';



import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, ComponentZoneCrashsite, ComponentPlayer, ComponentGroup, ComponentEvent, ComponentChoice ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
