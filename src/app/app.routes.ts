import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then((c) => c.DashboardComponent) },
    { path: 'dialog', loadComponent: () => import('./dialog/dialog.component').then((c) => c.DialogComponent) },
    { path: 'dialog/:id', loadComponent: () => import('./dialog/dialog.component').then((c) => c.DialogComponent) }
];
