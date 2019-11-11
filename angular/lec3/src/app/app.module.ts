import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowNumberPipe } from './pow-number.pipe';
import { HowerizerDirective } from './howerizer.directive';
import { HouseComponentComponent } from './components/house-component/house-component.component';

@NgModule({
  declarations: [
    AppComponent,
    PowNumberPipe,
    HowerizerDirective,
    HouseComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
