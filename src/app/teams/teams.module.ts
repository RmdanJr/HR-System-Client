import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TeamsComponent } from './teams.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { TeamsRoutingModule } from './teams-routing.module';

@NgModule({
  declarations: [
    TeamsComponent,
    TeamsListComponent,
    TeamDetailsComponent,
    AddTeamComponent,
    EditTeamComponent,
    DeleteTeamComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule,
    CommonModule,
    TeamsRoutingModule,
  ],
})
export class TeamsModule {}
