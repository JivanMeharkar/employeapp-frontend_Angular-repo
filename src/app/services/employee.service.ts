import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = 'http://localhost:1212/api/employees';

  constructor(private http: HttpClient) {}

  saveEmployee(employee: Employee): Observable<Employee> {

    return this.http.post<Employee>(
      this.apiUrl,
      employee
    );

  }

  getAllEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(
      this.apiUrl
    );

  }

  getEmployeeById(id: number): Observable<Employee> {

    return this.http.get<Employee>(
      `${this.apiUrl}/${id}`
    );

  }

  updateEmployee(
    id: number,
    employee: Employee
  ): Observable<Employee> {

    return this.http.put<Employee>(
      `${this.apiUrl}/${id}`,
      employee
    );

  }

  deleteEmployee(id: number): Observable<void> {

    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );

  }

  getEmployeeCount(): Observable<number> {

  return this.http.get<number>(
    `${this.apiUrl}/count`
  );

}

}