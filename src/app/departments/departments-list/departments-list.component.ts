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
      id: 'sw-dev-department-id',
      name: 'Software Development',
      manager: { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
      teams: [
        { id: 'mrc-team-id', name: 'MRC' },
        { id: 'tech-woriorrs-team-id', name: 'Tech Woriorrs' },
        { id: 'another-team-team-id', name: 'another team' },
      ],
      employees: [
        { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
        { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
        { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
      ],
    },
  ];

  getTeamsNames(departmentIdx: number): string[] {
    return this.departments[departmentIdx].teams.map((team) => team.name);
  }
}
