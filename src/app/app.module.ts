import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VacationsPageComponent } from './vacations-page/vacations-page.component';
import { VacationsDetailsPageComponent } from './vacations-details-page/vacations-details-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    VacationsPageComponent,
    VacationsDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
