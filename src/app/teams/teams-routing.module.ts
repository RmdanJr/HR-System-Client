import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeamComponent } from './add-team/add-team.component';
import { DeleteTeamComponent } from './delete-team/delete-team.component';
import { EditTeamComponent } from './edit-team/edit-team.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamsComponent } from './teams.component';

const routes: Routes = [
  {
    path: 'teams',
    component: TeamsComponent,
    children: [
      { path: '', component: TeamsListComponent },
      { path: 'new', component: AddTeamComponent },
      { path: ':id', component: TeamDetailsComponent },
      { path: ':id/edit', component: EditTeamComponent },
      { path: ':id/delete', component: DeleteTeamComponent },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule {}
