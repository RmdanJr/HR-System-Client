import { Component, Input } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
})
export class EmployeesComponent {
  @Input() employees: Employee[] = [
    {
      id: 'df34-l34j-23j4-dsf8',
      username: 'RmdanJr',
      name: 'Hassan Ramadan',
      birthDate: new Date(2000, 9, 1),
      gender: 'MALE',
      graduationDate: new Date(2022, 7, 1),
      salary: { gross: 30000, net: 24500, insuranceAmount: 500 },
      department: { id: 'sw-dev-department-id', name: 'Software Development' },
      team: { id: 'mrc-team-id', name: 'MRC' },
      expertises: [
        { name: 'C++', level: 'EXPERT' },
        { name: 'Java', level: 'NEWBIE' },
      ],
      manager: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
      managedDepartment: null,
      managedTeam: null,
      managedEmployees: [],
    },
  ];
}
