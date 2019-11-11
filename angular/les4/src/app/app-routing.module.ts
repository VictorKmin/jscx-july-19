import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './component/welcome/welcome.component';
import {HouseComponent} from './component/house/house.component';
import {SingleHouseComponent} from './component/single-house/single-house.component';
import {RegisterComponent} from './component/register/register.component';
import {LoginComponent} from './component/login/login.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'houses', component: HouseComponent},
  {path: 'houses/:id', component: SingleHouseComponent},
  {path: 'reg', component: RegisterComponent},
  {path: 'log', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
