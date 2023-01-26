import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DepartmentsComponent } from './departments/departments.component';
import { TeamsComponent } from './teams/teams.component';
import { EmployeesComponent } from './employees/employees.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './departments/delete-department/delete-department.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DepartmentsComponent,
    TeamsComponent,
    EmployeesComponent,
    AddDepartmentComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    DepartmentsListComponent,
    DepartmentDetailsComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
