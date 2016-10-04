import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentZoneCrashsite } from './zone/crashsite/componentZoneCrashsite';
import { ComponentPlayer } from './player/componentPlayer';
import { ComponentGroup } from './group/componentGroup';
import { ComponentEvent } from './event/componentEvent';
import { ComponentLogin } from './login/componentLogin';
import { ComponentPlaceholder } from './placeholder/componentPlaceholder';
import { ComponentParent } from './parent/componentParent';
import { ComponentApiGroup } from './api/apiComponentGroup';




const appRoutes: Routes = [
  {
    path: '',
    component: ComponentZoneCrashsite,
  },
  {
      path: 'login',
      component: ComponentLogin
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
  {
    path: 'group',
    component: ComponentGroup
  },
  {
    path: 'api',
    component: ComponentParent,
    children: [
      { path: '', component: ComponentPlaceholder, },
      {
        path: 'groups',
        component: ComponentApiGroup,
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
