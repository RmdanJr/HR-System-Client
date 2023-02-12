import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Department } from 'src/app/departments/department.model';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { Employee } from 'src/app/employees/employee.model';
import { EmployeesService } from 'src/app/employees/employees.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { NewTeam, Team } from '../team.model';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css'],
})
export class AddTeamComponent {
  @ViewChild('newMember') newMemberRef: ElementRef;
  allEmployees: Employee[] = [];
  allDepartments: Department[] = [];
  teamMembers: Employee[] = [];

  constructor(
    public teamsService: TeamsService,
    public employeesService: EmployeesService,
    public departmentsService: DepartmentsService,
    public alertService: AlertService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.employeesService
      .getAllEmployees()
      .subscribe((employees) => (this.allEmployees = employees));

    this.departmentsService
      .getAllDepartments()
      .subscribe((departments) => (this.allDepartments = departments));
  }

  addNewMember() {
    const newMember = this.allEmployees.find(
      (member) => member.id === this.newMemberRef.nativeElement.value
    );
    if (newMember) this.teamMembers.push(newMember);
  }

  deleteMember(memberId: string) {
    this.teamMembers = this.teamMembers.filter(
      (member) => memberId !== member.id
    );
  }

  getAvailableMembers() {
    return this.allEmployees.filter((employee) => {
      for (let teamMember of this.teamMembers) {
        if (teamMember.id === employee.id) return false;
      }
      return true;
    });
  }

  onSubmit(addTeamFormValue: {
    name: string;
    department: string;
    lead: string;
  }) {
    const newTeam: NewTeam = {
      name: addTeamFormValue.name,
      department: {
        id: addTeamFormValue.department,
        name:
          this.allDepartments.find(
            (department) => department.id === addTeamFormValue.department
          )?.name ?? '',
      },
      lead: {
        id: addTeamFormValue.lead,
        name:
          this.allEmployees.find(
            (employee) => employee.id === addTeamFormValue.lead
          )?.name ?? '',
      },
      members: this.teamMembers,
    };

    this.teamsService.addTeam(newTeam).subscribe((added) => {
      if (added)
        this.alertService.alert(`${newTeam.name} team added successfully!`, true);
      else
        this.alertService.alert(`${newTeam.name} team can't be added!`, false);
      history.back();
    });
  }
}
