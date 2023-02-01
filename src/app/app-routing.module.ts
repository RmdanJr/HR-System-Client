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
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { AddTeamComponent } from './teams/add-team/add-team.component';
import { TeamDetailsComponent } from './teams/team-details/team-details.component';
import { EditTeamComponent } from './teams/edit-team/edit-team.component';
import { DeleteTeamComponent } from './teams/delete-team/delete-team.component';
import { AddEmployeeComponent } from './employees/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';
import { EditEmployeeComponent } from './employees/edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './employees/delete-employee/delete-employee.component';
import { EmployeesListComponent } from './employees/employees-list/employees-list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'departments' },
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
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      { path: '', component: TeamsListComponent },
      { path: 'new', component: AddTeamComponent },
      { path: ':id', component: TeamDetailsComponent },
      { path: ':id/edit', component: EditTeamComponent },
      { path: ':id/delete', component: DeleteTeamComponent },
    ],
  },
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', component: EmployeesListComponent },
      { path: 'new', component: AddEmployeeComponent },
      { path: ':id', component: EmployeeDetailsComponent },
      { path: ':id/edit', component: EditEmployeeComponent },
      { path: ':id/delete', component: DeleteEmployeeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
