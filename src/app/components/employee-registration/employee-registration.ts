import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-registration',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './employee-registration.html',
  styleUrl: './employee-registration.css'
})
export class EmployeeRegistration implements OnInit {

  employee: Employee = {

    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    department: '',
    designation: '',
    salary: 0

  };

  isEditMode = false;

  employeeId!: number;


  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.isEditMode = true;

      this.employeeId = Number(id);

      this.loadEmployee(this.employeeId);

    }

  }


  loadEmployee(id: number): void {

    this.employeeService.getEmployeeById(id).subscribe({

      next: (data: Employee) => {

        console.log('Employee Data:', data);

        this.employee = data;

      },

      error: (error) => {

        console.error('Error loading employee:', error);

        alert('Employee not found');

      }

    });

  }


  saveEmployee(): void {

    if (this.isEditMode) {

      this.employeeService
        .updateEmployee(this.employeeId, this.employee)
        .subscribe({

          next: (response) => {

            console.log('Employee Updated:', response);

            alert('Employee Updated Successfully');

            this.router.navigate(['/employees']);

          },

          error: (error) => {

            console.error('Update Error:', error);

            alert('Something went wrong while updating employee');

          }

        });

    } else {

      this.employeeService
        .saveEmployee(this.employee)
        .subscribe({

          next: (response) => {

            console.log('Employee Saved:', response);

            alert('Employee Registered Successfully');

           this.router.navigate(['/']);

          },

          error: (error) => {

            console.error('Save Error:', error);

            alert('Something went wrong');

          }

        });

    }

  }

}