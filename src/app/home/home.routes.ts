import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const CHILD_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];
