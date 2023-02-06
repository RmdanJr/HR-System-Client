import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

import { TeamsService } from '../teams.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-delete-team',
  templateUrl: './delete-team.component.html',
  styleUrls: ['./delete-team.component.css'],
})
export class DeleteTeamComponent {
  teamId: string;
  modelMessage: string;

  constructor(
    public teamsService: TeamsService,
    public route: ActivatedRoute,
    public alertService: AlertService,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.teamId = this.route.snapshot.params['id'];
    this.modelMessage = `Team with id ${this.teamId} will be deleted. Are you sure?`;
  }

  confirm = () => {
    this.teamsService
      .deleteTeam(this.teamId)
      .subscribe((deleted) => {
        if (deleted)
          this.alertService.alert(
            `Team with id ${this.teamId} deleted successfully!`,
            true
          );
        else
          this.alertService.alert(
            `Team with id ${this.teamId} can't be deleted!`,
            false
          );
        this.location.back();
      });
  };
}
