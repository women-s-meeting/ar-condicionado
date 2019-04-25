
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { Floor3Component } from './floor3/floor3.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'floor3', component: Floor3Component }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)
