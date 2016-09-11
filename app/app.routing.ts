import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentZoneCrashsite } from './zone/crashsite/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';
import { ComponentGroup } from './group/componentGroup';
import { ComponentEvent } from './event/componentEvent';


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
      path: 'event',
      component: ComponentEvent
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
