import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css'
})
export class EmployeeList implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    console.log('EmployeeList component loaded');

    this.loadEmployees();
  }

  loadEmployees(): void {

    console.log('Calling Employee API...');

    this.employeeService.getAllEmployees().subscribe({

      next: (data: Employee[]) => {

        console.log('API DATA:', data);

        this.employees = data;

        this.cdr.detectChanges();

        console.log(
          'Employees assigned:',
          this.employees.length
        );

      },

      error: (error) => {

        console.error('API ERROR:', error);

      }

    });

  }

  editEmployee(id: number): void {

  console.log('EDIT BUTTON CLICKED');
  console.log('Employee ID:', id);

  this.router.navigate(['/register', id]);

}

  deleteEmployee(id: number): void {

    if (!confirm('Are you sure you want to delete this employee?')) {
      return;
    }

    this.employeeService.deleteEmployee(id).subscribe({

      next: () => {

        alert('Employee deleted successfully');

        this.employees = this.employees.filter(
          employee => employee.id !== id
        );

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('Delete Error:', error);

      }

    });

  }

}