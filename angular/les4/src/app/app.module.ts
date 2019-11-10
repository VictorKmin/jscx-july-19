import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { HouseComponent } from './component/house/house.component';
import { SingleHouseComponent } from './component/single-house/single-house.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HouseComponent,
    SingleHouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
