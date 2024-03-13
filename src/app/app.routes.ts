import { Routes } from '@angular/router';
import { AppRoutingConstants } from './shared/constants/app-routing.constants';

export const routes: Routes = [
    {
        path: AppRoutingConstants.ROUTING_FAVORITES,
        loadComponent: () => import('./features/job-favorite-list/job-favorite-list.component').then((c) => c.JobFavoriteListComponent)
    },
    {
        path: AppRoutingConstants.ROUTING_JOBS,
        loadComponent: () => import('./features/job-list/job-list.component').then((c) => c.JobListComponent) 
    },
    {
        path: `${AppRoutingConstants.ROUTING_JOBS}/:id`,
        loadComponent: () => import('./features/job-detail/job-detail.component').then((c) => c.JobDetailComponent)
    },
    {
        path: '',
        redirectTo: AppRoutingConstants.ROUTING_JOBS,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: AppRoutingConstants.ROUTING_JOBS
    }
];


