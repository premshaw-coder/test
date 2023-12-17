import { Routes } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dialog', component: DialogComponent },
    { path: 'dialog/:id', component: DialogComponent }
];
