import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WelcomeComponent} from './component/welcome/welcome.component';
import {HouseComponent} from './component/house/house.component';
import {SingleHouseComponent} from './component/single-house/single-house.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'houses', component: HouseComponent},
  {path: 'houses/:id', component: SingleHouseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
