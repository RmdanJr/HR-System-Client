import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Employee } from 'src/app/employees/employee.model';
import { Department } from '../department.model';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent {
  @ViewChild('newTeam')
  newTeamRef!: ElementRef;
  @Input() employees = [
    { id: 'hassan-ramadan-employee-id', name: 'Hassan Ramadan' },
    { id: 'ayman-hassan-employee-id', name: 'Ayman Hassan' },
    { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
  ];
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
  managerId = this.department.manager.id;

  allTeams = [
    { id: 'mrc-team-id', name: 'MRC' },
    { id: 'tech-woriorrs-team-id', name: 'Tech Woriorrs' },
    { id: 'another-team-team-id', name: 'another team' },
    { id: 'rick-morty-team-id', name: 'rick morty' },
  ];

  getNewTeams() {
    return this.allTeams.filter((team) => {
      for (let departmentTeam of this.department.teams) {
        if (departmentTeam.id === team.id) return false;
      }
      return true;
    });
  }

  deleteTeam(teamId: string) {
    this.department.teams = this.department.teams.filter(
      (team) => team.id != teamId
    );
  }

  addNewTeam() {
    const newTeam = this.allTeams.find(
      (team) => team.id === this.newTeamRef.nativeElement.value
    );
    if (newTeam) this.department.teams.push(newTeam);
  }
}
