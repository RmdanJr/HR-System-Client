import { Component, Input } from '@angular/core';

interface Department {
  id: string;
  name: string;
  manager: string;
  teams: string[];
  employeesNum: number;
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
      name: 'Development Department',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employeesNum: 120,
    },
    {
      id: '348s-sdls-34k3-4l34',
      name: 'Development Department',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employeesNum: 120,
    },
    {
      id: '348s-sdls-34k3-4l34',
      name: 'Development Department',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employeesNum: 120,
    },
    {
      id: '348s-sdls-34k3-4l34',
      name: 'Development Department',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employeesNum: 120,
    },
    {
      id: '348s-sdls-34k3-4l34',
      name: 'Development Department',
      manager: 'Ayman Hassan',
      teams: ['MRC', 'Tech Woriorrs', 'another team'],
      employeesNum: 120,
    },
  ];
}
