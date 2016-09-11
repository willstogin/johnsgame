import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { ComponentZoneCrashsite } from './zone/componentZoneCrashsite';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [ AppComponent, ComponentZoneCrashsite ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
