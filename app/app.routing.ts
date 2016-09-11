import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentZoneCrashsite } from './zone/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';

const appRoutes: Routes = [
  {
    path: '',
    component: ComponentZoneCrashsite
  },
  {
    path: 'player',
    component: ComponentPlayer
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
