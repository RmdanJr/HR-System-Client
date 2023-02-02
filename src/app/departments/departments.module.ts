import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DepartmentsRoutingModule } from './departments-routing.module';

import { DepartmentsComponent } from './departments.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { EditDepartmentComponent } from './edit-department/edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';

@NgModule({
  declarations: [
    DepartmentsComponent,
    DepartmentsListComponent,
    DepartmentDetailsComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    DeleteDepartmentComponent,
  ],
  imports: [
    SharedModule,
    RouterModule,
    FormsModule,
    CommonModule,
    DepartmentsRoutingModule,
  ],
  providers: [],
})
export class DepartmentsModule {}
