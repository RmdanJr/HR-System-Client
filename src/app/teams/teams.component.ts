import { Component, Input } from '@angular/core';

interface Team {
  id: string;
  name: string;
  lead: string;
  department: string;
  members: string[];
}

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css'],
})
export class TeamsComponent {
  @Input() teams: Team[] = [
    {
      id: '348s-sdls-34k3-4l34',
      name: 'MRC',
      department: 'Software Development',
      lead: 'Ayman Shebl',
      members: ['Hassan Ramadan', 'Ayman Shebl'],
    },
  ];
}
