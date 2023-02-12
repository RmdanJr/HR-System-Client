import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Employee } from 'src/app/employees/employee.model';
import { Department } from '../department.model';
import { Team } from 'src/app/teams/team.model';
import { TeamsService } from 'src/app/teams/teams.service';
import { EmployeesService } from 'src/app/employees/employees.service';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute } from '@angular/router';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css'],
})
export class EditDepartmentComponent implements OnInit {
  loadedRes = 0;
  isLoading = true;
  @ViewChild('newTeam') newTeamRef!: ElementRef;

  department: Department;
  managerId: string;

  allEmployees: Employee[];
  allTeams: Team[];

  constructor(
    public teamsService: TeamsService,
    public employeesService: EmployeesService,
    public departmentsService: DepartmentsService,
    public alertService: AlertService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.teamsService.getAllTeams().subscribe((teams) => {
      this.allTeams = teams;
      this.updateLoadingStatus();
    });

    this.employeesService.getAllEmployees().subscribe((employees) => {
      this.allEmployees = employees;
      this.updateLoadingStatus();
    });

    const departmentId = this.route.snapshot.params['id'];
    this.departmentsService
      .getDepartment(departmentId)
      .subscribe((department) => {
        this.department = department;
        if (department.manager) this.managerId = department.manager.id;
        this.updateLoadingStatus();
      });
  }

  getNewTeams() {
    return this.allTeams.filter((team) => {
      for (let departmentTeam of this.department.teams) {
        if (departmentTeam.id === team.id) return false;
      }
      return true;
    });
  }

  updateLoadingStatus() {
    this.loadedRes++;
    if (this.loadedRes === 3) {
      this.isLoading = false;
    }
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

  onSubmit(editDepartmentFormValue: Department) {
    const editedDepartment: Department = {
      id: this.department.id,
      name: editDepartmentFormValue.name,
      manager: {
        id: this.managerId,
        name:
          this.allEmployees.find((employee) => employee.id === this.managerId)
            ?.name ?? '',
      },
      teams: this.department.teams,
      employees: this.department.employees,
    };

    this.departmentsService
      .editDepartment(editedDepartment, this.department.id!)
      .subscribe((edited) => {
        if (edited)
          this.alertService.alert(
            `${editDepartmentFormValue.name} department edited successfully!`,
            true
          );
        else
          this.alertService.alert(
            `${editDepartmentFormValue.name} department can't be edited!`,
            false
          );
        history.back();
      });
  }
}
