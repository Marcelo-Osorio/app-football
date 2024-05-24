import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'welcome',
    pathMatch : 'full'
  },
  {
    path : 'welcome',
    loadChildren : () => import('@welcome/welcome.routes').then(R => R.WELCOME_ROUTES)
  }
];
