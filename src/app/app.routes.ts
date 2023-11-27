import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppDetailComponent } from './app-detail/app-detail.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'apps/:id',
    component: AppDetailComponent,
  },
];
