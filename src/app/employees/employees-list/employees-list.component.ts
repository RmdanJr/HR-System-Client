import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  employees: Employee[] = [];

  constructor(public employeesService: EmployeesService) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe((employees) => {
      this.employees = employees;
      this.isLoading = false;
    });
  }
}
