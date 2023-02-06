import { Component, OnInit } from '@angular/core';
import { Team } from '../team.model';
import { TeamsService } from '../teams.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css'],
})
export class TeamDetailsComponent implements OnInit {
  isLoading: boolean = true;
  team: Team;

  constructor(
    public teamsService: TeamsService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.params['id'];
    this.teamsService.getTeam(teamId).subscribe((team) => {
      this.team = team;
      this.isLoading = false;
    });
  }
}
