import { Component, ElementRef, ViewChild } from '@angular/core';
import { Employee } from '../employee.model';
import { Department } from 'src/app/departments/department.model';
import { Team } from 'src/app/teams/team.model';
import { DepartmentsService } from 'src/app/departments/departments.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { TeamsService } from 'src/app/teams/teams.service';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {
  loadRes = 0;
  isLoading = true;
  @ViewChild('newManagedEmployee') newManagedEmployee: ElementRef;
  @ViewChild('expertiseName') expertiseName: ElementRef;
  @ViewChild('expertiseLevel') expertiseLevel: ElementRef;

  allDepartments: Department[] = [];
  allTeams: Team[] = [];
  allEmployees: Employee[] = [];
  employee: Employee;

  constructor(
    public employeesService: EmployeesService,
    public departmentsService: DepartmentsService,
    public teamsService: TeamsService,
    public alertService: AlertService,
    public route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const employeeId = this.route.snapshot.params['id'];

    this.departmentsService.getAllDepartments().subscribe((departments) => {
      this.allDepartments = departments;
      this.updateLoading();
    });

    this.teamsService.getAllTeams().subscribe((teams) => {
      this.allTeams = teams;
      this.updateLoading();
    });

    this.employeesService.getAllEmployees().subscribe((employees) => {
      this.allEmployees = employees;
      this.employee = this.allEmployees.find(
        (employee) => employee.id === employeeId
      )!;
      this.updateLoading();
    });
  }

  deleteExpertise(expertise: { name: string; level: string }) {
    this.employee.expertises = this.employee.expertises.filter(
      (currExpertise) => currExpertise.name !== expertise.name
    );
  }

  addNewExpertise() {
    const newExpertise = {
      name: this.expertiseName.nativeElement.value,
      level: this.expertiseLevel.nativeElement.value,
    };
    this.expertiseName.nativeElement.value = '';
    for (let expertise of this.employee.expertises) {
      if (expertise.name == newExpertise.name) {
        expertise.level = newExpertise.level;
        return;
      }
    }
    this.employee.expertises.push(newExpertise);
  }

  deleteManagedEmployee(employeeId: string) {
    this.employee.managedEmployees = this.employee.managedEmployees.filter(
      (employee) => employee.id != employeeId
    );
  }

  addNewManagedEmployee() {
    const managedEmployeeId = this.newManagedEmployee.nativeElement.value;
    if (managedEmployeeId === '') return;
    this.employee.managedEmployees.push({
      id: managedEmployeeId,
      name:
        this.allEmployees.find((employee) => employee.id === managedEmployeeId)
          ?.name ?? '',
    });
  }

  getNewManagedEmployees() {
    return this.allEmployees.filter((employee) => {
      for (let managedEmployee of this.employee.managedEmployees) {
        if (employee.id === managedEmployee.id) return false;
      }
      return employee.id !== this.employee.id;
    });
  }

  getAvailableManagers() {
    return this.allEmployees.filter(
      (employee) => employee.id !== this.employee.id
    );
  }

  updateLoading() {
    this.loadRes++;
    if (this.loadRes === 3) {
      this.isLoading = false;
    }
  }

  onSubmit(editEmployeeFormValue: {
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
    const editedEmployee: Employee = {
      id: this.employee.id,
      name: editEmployeeFormValue.name,
      username: editEmployeeFormValue.username,
      password: editEmployeeFormValue.password,
      birthDate: editEmployeeFormValue.birthDate,
      gender: editEmployeeFormValue.gender,
      graduationDate: editEmployeeFormValue.graduationDate,
      salary: { gross: editEmployeeFormValue.salary },
      manager: {
        id: editEmployeeFormValue.manager,
        name:
          this.allEmployees.find(
            (employee) => employee.id === editEmployeeFormValue.manager
          )?.name ?? '',
      },
      department: {
        id: editEmployeeFormValue.department,
        name:
          this.allDepartments.find(
            (department) => department.id === editEmployeeFormValue.department
          )?.name ?? '',
      },
      team: {
        id: editEmployeeFormValue.team,
        name:
          this.allTeams.find((team) => team.id === editEmployeeFormValue.team)
            ?.name ?? '',
      },
      managedDepartment: {
        id: editEmployeeFormValue.managedDepartment,
        name:
          this.allDepartments.find(
            (department) =>
              department.id === editEmployeeFormValue.managedDepartment
          )?.name ?? '',
      },
      managedTeam: {
        id: editEmployeeFormValue.managedTeam,
        name:
          this.allTeams.find(
            (team) => team.id === editEmployeeFormValue.managedTeam
          )?.name ?? '',
      },
      expertises: this.employee.expertises,
      managedEmployees: this.employee.managedEmployees,
    };
    console.log(editedEmployee);
    this.employeesService
      .editEmployee(editedEmployee, editedEmployee.id)
      .subscribe((edited) => {
        if (edited)
          this.alertService.alert(
            `${editedEmployee.name} employee edited successfully!`,
            true
          );
        else
          this.alertService.alert(
            `${editedEmployee.name} employee can't be edited!`,
            false
          );
        history.back();
      });
  }
}
