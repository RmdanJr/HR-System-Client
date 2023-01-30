import { Component, ElementRef, ViewChild } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  @ViewChild('newManagedEmployee') newManagedEmployee: ElementRef;
  @ViewChild('expertiseName') expertiseName: ElementRef;
  @ViewChild('expertiseLevel') expertiseLevel: ElementRef;

  departments: Array<{ id: string; name: string }> = [];
  teams: Array<{ id: string; name: string }> = [];
  employees: Array<{ id: string; name: string }> = [];
  expertises: Set<{ name: string; level: string }> = new Set();
  managedEmployees: Array<{ id: string; name: string }> = [];

  deleteExpertise(expertise: { name: string; level: string }) {
    this.expertises.delete(expertise);
  }

  addNewExpertise() {
    const newExpertise = {
      name: this.expertiseName.nativeElement.value,
      level: this.expertiseLevel.nativeElement.value,
    };
    for (let expertise of this.expertises) {
      if (expertise.name == newExpertise.name) {
        expertise.level = newExpertise.level;
        return;
      }
    }
    this.expertises.add(newExpertise);
  }

  deleteManagedEmployee(employeeId: string) {
    this.managedEmployees = this.managedEmployees.filter(
      (employee) => employee.id != employeeId
    );
  }

  addNewManagedEmployee() {
    this.managedEmployees.push(this.newManagedEmployee.nativeElement.value);
  }
}
