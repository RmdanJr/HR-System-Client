import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Team } from '../team.model';
import { Employee } from 'src/app/employees/employee.model';
import { Department } from 'src/app/departments/department.model';

import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeamsService } from '../teams.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { EmployeesService } from 'src/app/employees/employees.service';

@Component({
  selector: 'app-edit-team',
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.css'],
})
export class EditTeamComponent implements OnInit {
  loadedRes = 0;
  isLoading = true;
  @ViewChild('newMember') newMemberRef: ElementRef;
  team: Team;
  allEmployees: Employee[] = [];
  allDepartments: Department[] = [];
  leadId: string;
  departmentId: string;

  constructor(
    public teamsService: TeamsService,
    public employeesService: EmployeesService,
    public departmentsService: DepartmentsService,
    public alertService: AlertService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe((employees) => {
      this.allEmployees = employees;
      this.updateLoadingStatus();
    });

    this.departmentsService.getAllDepartments().subscribe((departments) => {
      this.allDepartments = departments;
      this.updateLoadingStatus();
    });

    const teamId = this.route.snapshot.params['id'];
    this.teamsService.getTeam(teamId).subscribe((team) => {
      this.team = team;
      if (this.team.lead) this.leadId = this.team.lead.id;
      if (this.team.department) this.departmentId = this.team.department.id;
      this.updateLoadingStatus();
    });
  }

  updateLoadingStatus() {
    this.loadedRes++;
    if (this.loadedRes === 3) {
      this.isLoading = false;
    }
  }

  deleteMember(memberId: string) {
    this.team.members = this.team.members.filter(
      (member) => memberId !== member.id
    );
  }

  addNewMember() {
    const newMember = this.allEmployees.find(
      (member) => member.id === this.newMemberRef.nativeElement.value
    );
    if (newMember) this.team.members.push(newMember);
  }

  getAvailableMembers() {
    return this.allEmployees.filter((employee) => {
      for (let teamMember of this.team.members) {
        if (teamMember.id === employee.id) return false;
      }
      return true;
    });
  }

  onSubmit(editTeamFormValue: {
    name: string;
    department: string;
    lead: string;
  }) {
    const editedTeam: Team = {
      id: this.team.id,
      name: editTeamFormValue.name,
      department: {
        id: this.departmentId,
        name:
          this.allDepartments.find(
            (department) => department.id === this.departmentId
          )?.name ?? '',
      },
      lead: {
        id: this.leadId,
        name:
          this.allEmployees.find((employee) => employee.id === this.leadId)
            ?.name ?? '',
      },
      members: this.team.members,
    };

    this.teamsService
      .editTeam(editedTeam, editedTeam.id!)
      .subscribe((edited) => {
        if (edited)
          this.alertService.alert(
            `${editedTeam.name} team edited successfully!`,
            true
          );
        else
          this.alertService.alert(
            `${editedTeam.name} team can't be edited!`,
            false
          );
        history.back();
      });
  }
}
