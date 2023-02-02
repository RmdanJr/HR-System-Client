import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DepartmentsComponent } from './departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';

const routes: Routes = [
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
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
