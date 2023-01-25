import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/employees/employees.component';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
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
