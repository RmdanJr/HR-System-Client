import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { EmployeesService } from '../employees.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css'],
})
export class DeleteEmployeeComponent {
  employeeId: string;
  modelMessage: string;

  constructor(
    public employeesService: EmployeesService,
    public route: ActivatedRoute,
    public alertService: AlertService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['id'];
    this.modelMessage = `Employee with id ${this.employeeId} will be deleted. Are you sure?`;
  }

  confirm = () => {
    this.employeesService
      .deleteEmployee(this.employeeId)
      .subscribe((deleted) => {
        if (deleted)
          this.alertService.alert(
            `Employee with id ${this.employeeId} deleted successfully!`,
            true
          );
        else
          this.alertService.alert(
            `Employee with id ${this.employeeId} can't be deleted!`,
            false
          );
        this.location.back();
      });
  };
}
