import { Component } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent {
  team = {
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
  };
}
