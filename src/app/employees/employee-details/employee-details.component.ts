import { Component } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent {
  employee: Employee = {
    id: 'df34-l34j-23j4-dsf8',
    username: 'RmdanJr',
    name: 'Hassan Ramadan',
    birthDate: new Date(2000, 9, 1),
    gender: 'MALE',
    graduationDate: new Date(2022, 7, 1),
    salary: { gross: 30000, net: 24500, insuranceAmount: 500 },
    department: { id: 'sw-dev-department-id', name: 'Software Development' },
    team: { id: 'mrc-team-id', name: 'MRC' },
    expertises: new Set([
      { name: 'C++', level: 'EXPERT' },
      { name: 'Java', level: 'NEWBIE' },
    ]),
    manager: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
    managedDepartment: {
      id: 'sw-dev-department-id',
      name: 'Software Development',
    },
    managedTeam: { id: 'mrc-team-id', name: 'MRC' },
    managedEmployees: [],
  };
}
