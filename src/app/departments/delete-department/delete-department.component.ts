import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { DepartmentsService } from '../departments.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-delete-department',
  templateUrl: './delete-department.component.html',
  styleUrls: ['./delete-department.component.css'],
})
export class DeleteDepartmentComponent implements OnInit {
  departmentId: string;
  modelMessage: string;

  constructor(
    public departmentsService: DepartmentsService,
    public route: ActivatedRoute,
    public alertService: AlertService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.departmentId = this.route.snapshot.params['id'];
    this.modelMessage = `Department with id ${this.departmentId} will be deleted. Are you sure?`;
  }

  confirm = () => {
    this.departmentsService
      .deleteDepartment(this.departmentId)
      .subscribe((deleted) => {
        if (deleted)
          this.alertService.alert(
            `Department with id ${this.departmentId} deleted successfully!`,
            true
          );
        else
          this.alertService.alert(
            `Department with id ${this.departmentId} can't be deleted!`,
            false
          );
        this.location.back();
      });
  };
}
