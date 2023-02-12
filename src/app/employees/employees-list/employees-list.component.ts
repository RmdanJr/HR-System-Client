import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeesService } from '../employees.service';
import { AuthService, AuthStatus } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css'],
})
export class EmployeesListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  employees: Employee[] = [];
  status: AuthStatus = 'NOT_LOGGED_IN';

  constructor(
    public employeesService: EmployeesService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.status = this.authService.getStatus();
    this.employeesService.getAllEmployees().subscribe((employees) => {
      this.employees = employees;
      this.isLoading = false;
    });
  }
}
