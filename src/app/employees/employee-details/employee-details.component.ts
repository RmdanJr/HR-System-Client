import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  isLoading: boolean = true;
  employee: Employee;

  constructor(
    public employeesService: EmployeesService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.params['id'];
    this.employeesService.getEmployee(employeeId).subscribe((employee) => {
      this.employee = employee;
      this.isLoading = false;
    });
  }
}
