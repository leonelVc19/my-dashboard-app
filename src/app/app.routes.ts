import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component')
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component')
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options/defer-options.component')
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views/defer-views.component')
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user/user.component')
      },
      {
        path: 'users-list',
        title: 'Users List',
        loadComponent: () => import('./dashboard/pages/users/users.component')
      },
      {
        path: 'view-transition',
        title: 'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component')
      },
      {
        path: 'view-transition2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition/view-transition.component2')
      },
      {
        path: 'inputs-outputs',
        title: 'Inputs And Outputs',
        loadComponent: () => import('./dashboard/pages/input-outputs/input-outputs.component')
      },
      {
        path: 'material',
        title: 'Angular Material',
        loadComponent: () => import('./dashboard/pages/material/material.component')
      },
      { path: '', redirectTo: 'control-flow', pathMatch: 'full' }
    ]
  },
  {
    path: '**',
    // redirectTo: '/dashboard',
    redirectTo: (route) => { // no es async
      //como es uyna funcion se puede hacer injecion de
      // const AutServices = inject(AuthServices);
      // if(AutServices.isLoggedIn) {
        //al login
      // }
      //No login
      console.log(route);
      return '/dashboard';
    },
    pathMatch: 'full',
  },
];
