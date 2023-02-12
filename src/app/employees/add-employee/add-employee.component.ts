import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { EmployeesService } from '../employees.service';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { TeamsService } from 'src/app/teams/teams.service';
import { AlertService } from 'src/app/shared/alert/alert.service';

import { Employee } from '../employee.model';
import { Department } from 'src/app/departments/department.model';
import { Team } from 'src/app/teams/team.model';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('newManagedEmployee') newManagedEmployee: ElementRef;
  @ViewChild('expertiseName') expertiseName: ElementRef;
  @ViewChild('expertiseLevel') expertiseLevel: ElementRef;

  allDepartments: Department[] = [];
  allTeams: Team[] = [];
  allEmployees: Employee[] = [];
  expertises: Array<{ name: string; level: string }> = [];
  managedEmployees: Array<{ id: string; name: string }> = [];
  gender: string = 'NOT_RESPONDED';
  constructor(
    public employeesService: EmployeesService,
    public departmentsService: DepartmentsService,
    public teamsService: TeamsService,
    public alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.departmentsService
      .getAllDepartments()
      .subscribe((departments) => (this.allDepartments = departments));

    this.teamsService
      .getAllTeams()
      .subscribe((teams) => (this.allTeams = teams));

    this.employeesService
      .getAllEmployees()
      .subscribe((employees) => (this.allEmployees = employees));
  }

  deleteExpertise(expertise: { name: string; level: string }) {
    this.expertises = this.expertises.filter(
      (currExpertise) => currExpertise.name !== expertise.name
    );
  }

  addNewExpertise() {
    const newExpertise = {
      name: this.expertiseName.nativeElement.value,
      level: this.expertiseLevel.nativeElement.value,
    };
    this.expertiseName.nativeElement.value = '';
    for (let expertise of this.expertises) {
      if (expertise.name == newExpertise.name) {
        expertise.level = newExpertise.level;
        return;
      }
    }
    this.expertises.push(newExpertise);
  }

  deleteManagedEmployee(employeeId: string) {
    this.managedEmployees = this.managedEmployees.filter(
      (employee) => employee.id != employeeId
    );
  }

  addNewManagedEmployee() {
    const managedEmployeeId = this.newManagedEmployee.nativeElement.value;
    if (managedEmployeeId === '') return;
    this.managedEmployees.push({
      id: managedEmployeeId,
      name:
        this.allEmployees.find((employee) => employee.id === managedEmployeeId)
          ?.name ?? '',
    });
  }

  getNewManagedEmployees() {
    return this.allEmployees.filter((employee) => {
      for (let managedEmployee of this.managedEmployees) {
        if (employee.id === managedEmployee.id) return false;
      }
      return true;
    });
  }

  onSubmit(addEmployeeFormValue: {
    name: string;
    username: string;
    password: string;
    birthDate: Date;
    gender: string;
    graduationDate: Date;
    salary: number;
    manager: string;
    department: string;
    team: string;
    managedDepartment: string;
    managedTeam: string;
  }) {
    const newEmployee: Employee = {
      id: '',
      name: addEmployeeFormValue.name,
      username: addEmployeeFormValue.username,
      password: addEmployeeFormValue.password,
      birthDate: addEmployeeFormValue.birthDate,
      gender: addEmployeeFormValue.gender,
      graduationDate: addEmployeeFormValue.graduationDate,
      salary: { gross: addEmployeeFormValue.salary },
      manager: {
        id: addEmployeeFormValue.manager,
        name:
          this.allEmployees.find(
            (employee) => employee.id === addEmployeeFormValue.manager
          )?.name ?? '',
      },
      department: {
        id: addEmployeeFormValue.department,
        name:
          this.allDepartments.find(
            (department) => department.id === addEmployeeFormValue.department
          )?.name ?? '',
      },
      team: {
        id: addEmployeeFormValue.team,
        name:
          this.allTeams.find((team) => team.id === addEmployeeFormValue.team)
            ?.name ?? '',
      },
      managedDepartment: {
        id: addEmployeeFormValue.managedDepartment,
        name:
          this.allDepartments.find(
            (department) =>
              department.id === addEmployeeFormValue.managedDepartment
          )?.name ?? '',
      },
      managedTeam: {
        id: addEmployeeFormValue.managedTeam,
        name:
          this.allTeams.find(
            (team) => team.id === addEmployeeFormValue.managedTeam
          )?.name ?? '',
      },
      expertises: this.expertises,
      managedEmployees: this.managedEmployees,
    };
    console.log(newEmployee);
    this.employeesService.addEmployee(newEmployee).subscribe((added) => {
      if (added)
        this.alertService.alert(
          `${newEmployee.name} employee added successfully!`,
          true
        );
      else
        this.alertService.alert(
          `${newEmployee.name} employee can't be added!`,
          false
        );
      history.back();
    });
  }
}
