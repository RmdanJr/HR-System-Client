import { Component, ElementRef, ViewChild } from '@angular/core';
import { Employee } from '../employee.model';
import { Department } from 'src/app/departments/department.model';
import { Team } from 'src/app/teams/team.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent {
  @ViewChild('newManagedEmployee') newManagedEmployee: ElementRef;
  @ViewChild('expertiseName') expertiseName: ElementRef;
  @ViewChild('expertiseLevel') expertiseLevel: ElementRef;

  employee: Employee = {
    id: 'df34-l34j-23j4-dsf8',
    username: 'RmdanJr',
    name: 'Hassan Ramadan',
    birthDate: new Date(2000, 9, 1),
    gender: 'MALE',
    graduationDate: new Date(2022, 7, 1),
    salary: { gross: 30000, net: 24500, insuranceAmount: 500 },
    department: { id: 'sw-dev-department-id', name: 'Software Development' },
    team: { id: 'mrc-team-id', name: 'MRC' },
    expertises: new Set([
      { name: 'C++', level: 'EXPERT' },
      { name: 'Java', level: 'NEWBIE' },
    ]),
    manager: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
    managedDepartment: null,
    managedTeam: null,
    managedEmployees: [],
  };
  employees: Employee[] = [
    {
      id: 'df34-l34j-23j4-dsf8',
      username: 'RmdanJr',
      name: 'Hassan Ramadan',
      birthDate: new Date(2000, 9, 1),
      gender: 'MALE',
      graduationDate: new Date(2022, 7, 1),
      salary: { gross: 30000, net: 24500, insuranceAmount: 500 },
      department: { id: 'sw-dev-department-id', name: 'Software Development' },
      team: { id: 'mrc-team-id', name: 'MRC' },
      expertises: new Set([
        { name: 'C++', level: 'EXPERT' },
        { name: 'Java', level: 'NEWBIE' },
      ]),
      manager: { id: 'ayman-shebl-employee-id', name: 'Ayman Shebl' },
      managedDepartment: null,
      managedTeam: null,
      managedEmployees: [],
    },
  ];

  departments: Department[] = [];
  teams: Team[] = [];

  deleteExpertise(expertise: { name: string; level: string }) {
    this.employee.expertises.delete(expertise);
  }

  addNewExpertise() {
    const newExpertise = {
      name: this.expertiseName.nativeElement.value,
      level: this.expertiseLevel.nativeElement.value,
    };
    for (let expertise of this.employee.expertises) {
      if (expertise.name == newExpertise.name) {
        expertise.level = newExpertise.level;
        return;
      }
    }
    this.employee.expertises.add(newExpertise);
  }

  deleteManagedEmployee(employeeId: string) {
    this.employee.managedEmployees = this.employee.managedEmployees.filter(
      (employee) => employee.id != employeeId
    );
  }

  addNewManagedEmployee() {
    this.employee.managedEmployees.push({
      id: this.newManagedEmployee.nativeElement.value,
      name: this.newManagedEmployee.nativeElement.textContent,
    });
  }
}
