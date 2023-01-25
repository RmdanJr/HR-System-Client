import { Component, Input } from '@angular/core';

interface Employee {
  id: string;
  username: string;
  name: string;
  birthDate: Date;
  gender: string;
  graduationDate: Date;
  salary: { gross: number; net: number; insuranceAmount: number };
  department: string;
  team: string;
  expertises: Array<{ name: string; level: string }>;
  manager: string;
  managedDepartment: string;
  managedTeam: string;
  managedEmployees: string[];
}

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
      department: 'Software Development',
      team: 'MRC',
      expertises: [
        { name: 'C++', level: 'EXPERT' },
        { name: 'Java', level: 'NEWBIE' },
      ],
      manager: 'Ayman Shebl',
      managedDepartment: '',
      managedTeam: '',
      managedEmployees: [],
    },
  ];
}
