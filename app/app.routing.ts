import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentZoneCrashsite }      from './zone/componentZoneCrashsite';

const appRoutes: Routes = [
  {
    path: '',
    component: ComponentZoneCrashsite
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
