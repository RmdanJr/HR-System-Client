import { Component, Input } from '@angular/core';

interface Department {
  id: string;
  name: string;
  manager: string;
  teams: string[];
  employees: string[];
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
})
export class DepartmentsComponent {
  @Input() departments: Department[] = [
    {
      id: '348s-sdls-34k3-4l34',
      name: 'Software Development',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employees: ['Ayman Hassan', 'Ayman Shebl', 'Hassan Ramadan'],
    },
  ];
}
