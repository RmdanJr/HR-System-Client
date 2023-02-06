import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../department.model';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsService } from '../departments.service';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  isLoading: boolean = true;
  department: Department;

  constructor(
    public departmentsService: DepartmentsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit() {
    const departmentId = this.route.snapshot.params['id'];
    this.departmentsService
      .getDepartment(departmentId)
      .subscribe((department) => {
        this.department = department;
        this.isLoading = false;
      });
  }
}
