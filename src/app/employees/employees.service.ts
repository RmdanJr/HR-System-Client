import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.constants';
import { Employee } from './employee.model';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private httpClient: HttpClient) {}

  public getAllEmployees() {
    return this.httpClient.get<Employee[]>(`${baseUrl}/employees`);
  }

  public getEmployee(id: string) {
    return this.httpClient.get<Employee>(`${baseUrl}/employees/${id}`);
  }

  public addEmployee(employee: Employee) {
    return this.httpClient.post<Employee>(`${baseUrl}/employees`, employee);
  }

  public editEmployee(employee: Employee, id: string) {
    return this.httpClient.put<Employee>(
      `${baseUrl}/employees/${id}`,
      employee
    );
  }

  public deleteEmployee(id: string) {
    return this.httpClient.delete<boolean>(`${baseUrl}/employees/${id}`);
  }
}
