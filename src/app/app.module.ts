import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitizenComponent } from './citizen/citizen.component';
import { CityHallComponent } from './city-hall/city-hall.component';
import { DisplayComponent } from './display/display.component';
import { PoModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FillFormComponent } from './citizen/fill-form/fill-form.component';
import { DisplayFormHallComponent } from './city-hall/display-form-hall/display-form-hall.component';
import { DisplayFormCitizenComponent } from './display/display-form-citizen/display-form-citizen.component';

@NgModule({
  declarations: [
    AppComponent,
    CitizenComponent,
    CityHallComponent,
    DisplayComponent,
    FillFormComponent,
    DisplayFormHallComponent,
    DisplayFormCitizenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
