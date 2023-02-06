import { Component, Input, OnInit } from '@angular/core';

import { Team } from '../team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
})
export class TeamsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  teams: Team[] = [];

  constructor(public teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((teams) => {
      this.teams = teams;
      this.isLoading = false;
    });
  }
}
