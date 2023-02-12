import { Component, Input, OnInit } from '@angular/core';
import { Department } from '../department.model';
import { DepartmentsService } from '../departments.service';
import { AuthService, AuthStatus } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
})
export class DepartmentsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  departments: Department[] = [];
  status: AuthStatus = 'NOT_LOGGED_IN';

  constructor(
    public departmentsService: DepartmentsService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.status = this.authService.getStatus();
    this.departmentsService.getAllDepartments().subscribe((departments) => {
      this.departments = departments;
      this.isLoading = false;
    });
  }

  getTeamsNames(departmentIdx: number): string[] {
    return this.departments[departmentIdx].teams.map((team) => team.name);
  }
}
