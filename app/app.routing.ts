import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentZoneCrashsite } from './zone/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';
import { ComponentGroup } from './group/componentGroup';

const appRoutes: Routes = [
  {
    path: '',
    component: ComponentZoneCrashsite,
  },
  {
    path: 'game',
    component: ComponentZoneCrashsite,
    children: [
      {
        path: 'crashsite',
        component: ComponentZoneCrashsite,
      }
    ]
  },
  {
    path: 'player',
    component: ComponentPlayer
  },
  { path: 'group',
    component: ComponentGroup
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
