import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { VacationsPageComponent } from './vacations-page/vacations-page.component';
import { VacationsDetailsPageComponent } from './vacations-details-page/vacations-details-page.component';
const routes: Routes = [
  {path:"", component: HomePageComponent}, 
  {path:"vacations", component: VacationsPageComponent},
  {path:"vacations/:id", component: VacationsDetailsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
