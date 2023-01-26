import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsComponent } from './departments/departments.component';
import { TeamsComponent } from './teams/teams.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AddDepartmentComponent } from './departments/add-department/add-department.component';
import { DepartmentsListComponent } from './departments/departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './departments/department-details/department-details.component';
import { EditDepartmentComponent } from './departments/edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './departments/delete-department/delete-department.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/login' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
    ],
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
    children: [
      { path: '', component: DepartmentsListComponent },
      { path: 'new', component: AddDepartmentComponent },
      { path: ':id', component: DepartmentDetailsComponent },
      { path: ':id/edit', component: EditDepartmentComponent },
      { path: ':id/delete', component: DeleteDepartmentComponent },
    ],
  },
  { path: 'teams', component: TeamsComponent },
  { path: 'employees', component: EmployeesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
