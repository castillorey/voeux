import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./components/dashboard/dashboard.component').then(
        (com) => com.DashboardComponent
      ),
  },
  {
    path: 'create-voeux',
    loadComponent: () =>
      import('./components/create-voeux/create-voeux.component').then(
        (com) => com.CreateVoeuxComponent
      ),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/signin/signin.component').then(
        (com) => com.SigninComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('./components/signin/signin.component').then(
        (com) => com.SigninComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./components/signin/signin.component').then(
        (com) => com.SigninComponent
      ),
  },
];