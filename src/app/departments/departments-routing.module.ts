import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent } from './departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
  {
    path: 'departments',
    component: DepartmentsComponent,
    children: [
      { path: '', component: DepartmentsListComponent },
      {
        path: 'new',
        component: AddDepartmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id',
        component: DepartmentDetailsComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/edit',
        component: EditDepartmentComponent,
        canActivate: [AuthGuard],
      },
      {
        path: ':id/delete',
        component: DeleteDepartmentComponent,
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
export class DepartmentsRoutingModule {}
