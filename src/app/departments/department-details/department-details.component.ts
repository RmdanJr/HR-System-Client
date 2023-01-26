import { Component, Input } from '@angular/core';
import { Department } from '../department.model';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent {
  @Input() department: Department = {
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
  };
}
