import { Component, Input, OnInit } from '@angular/core';

import { Team } from '../team.model';
import { TeamsService } from '../teams.service';
import { AuthService, AuthStatus } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css'],
})
export class TeamsListComponent implements OnInit {
  @Input() isLoading: boolean = true;
  teams: Team[] = [];
  status: AuthStatus = 'NOT_LOGGED_IN';

  constructor(
    public teamsService: TeamsService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.status = this.authService.getStatus();
    this.teamsService.getAllTeams().subscribe((teams) => {
      this.teams = teams;
      this.isLoading = false;
    });
  }
}
