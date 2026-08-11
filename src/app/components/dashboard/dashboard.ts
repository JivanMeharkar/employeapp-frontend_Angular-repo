import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard implements OnInit {

  totalEmployees: number = 0;

  constructor(
    private employeeService: EmployeeService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    this.loadEmployeeCount();

  }

  loadEmployeeCount(): void {

    this.employeeService.getEmployeeCount().subscribe({

      next: (count: number) => {

        console.log('API COUNT:', count);

        this.totalEmployees = count;

        console.log('TOTAL EMPLOYEES VARIABLE:', this.totalEmployees);

        this.cdr.detectChanges();

      },

      error: (error) => {

        console.error('COUNT ERROR:', error);

      }

    });

  }

  test(): void {

    alert('Button Working');

  }

}