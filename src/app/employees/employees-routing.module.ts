import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'employees',
    component: EmployeesComponent,
    children: [
      { path: '', component: EmployeesListComponent },
      {
        path: 'new',
        component: AddEmployeeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: EmployeeDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/edit',
        component: EditEmployeeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/delete',
        component: DeleteEmployeeComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeesRoutingModule {}
