import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { Employee } from 'src/app/employees/employee.model';
import { EmployeesService } from 'src/app/employees/employees.service';
import { DepartmentsService } from '../departments.service';
import { TeamsService } from 'src/app/teams/teams.service';
import { Team } from 'src/app/teams/team.model';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent implements OnInit {
  @ViewChild('newTeam') newTeamRef!: ElementRef;

  allEmployees: Employee[] = [];
  allTeams: Team[] = [];
  selectedTeams: Team[] = [];

  constructor(
    public teamsService: TeamsService,
    public employeesService: EmployeesService,
    public departmentService: DepartmentsService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getAllEmployees()
      .subscribe((employees) => (this.allEmployees = employees));

    this.teamsService
      .getAllTeams()
      .subscribe((teams) => (this.allTeams = teams));
  }

  getNewTeams() {
    return this.allTeams.filter((team) => {
      for (let departmentTeam of this.selectedTeams) {
        if (departmentTeam.id === team.id) return false;
      }
      return true;
    });
  }

  deleteTeam(teamId: string) {
    this.selectedTeams = this.selectedTeams.filter((team) => team.id != teamId);
  }

  addNewTeam() {
    const newTeam = this.allTeams.find(
      (team) => team.id === this.newTeamRef.nativeElement.value
    );
    if (newTeam) this.selectedTeams.push(newTeam);
  }

  onSubmit(addDepartmentFormValue: { name: string; managerId: string }) {
    const newDepartment = {
      name: addDepartmentFormValue.name,
      manager: {
        id: addDepartmentFormValue.managerId,
        name:
          this.allEmployees.find(
            (employee) => employee.id === addDepartmentFormValue.managerId
          )?.name ?? '',
      },
      teams: this.selectedTeams,
      employees: [],
    };
    this.departmentService.addDepartment(newDepartment).subscribe((added) => {
      if (added)
        this.alertService.alert(
          `${addDepartmentFormValue.name} department added successfully!`,
          true
        );
      else
        this.alertService.alert(
          `${addDepartmentFormValue.name} department can't be added!`,
          false
        );
      history.back();
    });
  }
}
