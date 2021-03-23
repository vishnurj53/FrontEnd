import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { GetAllEmployeesComponent } from './get-all-employees/get-all-employees.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    GetEmployeeComponent,
    GetAllEmployeesComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

