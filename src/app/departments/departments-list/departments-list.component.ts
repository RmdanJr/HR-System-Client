import { Component, Input } from '@angular/core';
import { Department } from '../department.model';

@Component({
  selector: 'app-departments-list',
  templateUrl: './departments-list.component.html',
  styleUrls: ['./departments-list.component.css'],
})
export class DepartmentsListComponent {
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
