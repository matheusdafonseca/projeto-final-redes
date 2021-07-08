import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenComponent } from './citizen/citizen.component';
import { CityHallComponent } from './city-hall/city-hall.component';
import { DisplayComponent } from './display/display.component';

const routes: Routes = [
  { path: 'citizen', component: CitizenComponent },
  { path: 'city-hall', component: CityHallComponent },
  { path: 'display', component: DisplayComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
