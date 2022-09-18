import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DentistPageComponent } from './component/dentist-page/dentist-page.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './component/calendar/calendar.component';
import 'web-component-essentials';
import { AppointmentDialogComponent } from './component/appointment-dialog/appointment-dialog.component';
import { AppointmentCreateComponent } from './component/appointment-create/appointment-create.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'dentist-page', component: DentistPageComponent },
  { path: 'create', component: AppointmentCreateComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DentistPageComponent,
    LoginComponent,
    CalendarComponent,
    AppointmentDialogComponent,
    AppointmentCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }
