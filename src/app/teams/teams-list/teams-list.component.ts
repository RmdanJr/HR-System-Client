import { Component, Input } from '@angular/core';

import { Team } from '../team.model';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
})
export class TeamsListComponent {
  @Input() teams: Team[] = [
    {
      id: '348s-sdls-34k3-4l34',
      name: 'MRC',
      department: {
        id: 'software-dev-department-id',
        name: 'Software Development',
      },
      lead: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
      members: [
        { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
        { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
      ],
    },
  ];
}
