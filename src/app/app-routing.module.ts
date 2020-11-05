import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    component:  LoginComponent,
    path: 'login'
  },
  {
    component:  DashboardComponent,
    path: 'dashboard'
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
