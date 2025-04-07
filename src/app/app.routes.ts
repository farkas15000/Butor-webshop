import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/shop/shop.component').then(m => m.ShopComponent)
    },
    {
        path: 'termekleiras',
        loadComponent: () => import('./pages/termekleiras/termekleiras.component').then(m => m.TermekleirasComponent)
    },
    {
        path: 'kosar',
        loadComponent: () => import('./pages/kosar/kosar.component').then(m => m.KosarComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: 'signup',
        loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '**',
        loadComponent: () => import('./shared/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
    },
];