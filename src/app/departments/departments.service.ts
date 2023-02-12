import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../app.constants';
import { Department } from './department.model';

@Injectable({ providedIn: 'root' })
export class DepartmentsService {
  constructor(private httpClient: HttpClient) {}

  public getAllDepartments() {
    return this.httpClient.get<Department[]>(`${baseUrl}/departments`);
  }

  public getDepartment(id: string) {
    return this.httpClient.get<Department>(`${baseUrl}/departments/${id}`);
  }

  public addDepartment(department: Department) {
    return this.httpClient.post<Department>(
      `${baseUrl}/departments`,
      department
    );
  }

  public editDepartment(department: Department, id: string) {
    return this.httpClient.put<Department>(
      `${baseUrl}/departments/${id}`,
      department
    );
  }

  public deleteDepartment(id: string) {
    return this.httpClient.delete<boolean>(`${baseUrl}/departments/${id}`);
  }
}
