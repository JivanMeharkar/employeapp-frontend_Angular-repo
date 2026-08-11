import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./components/dashboard/dashboard')
        .then(m => m.Dashboard)
  },

  {
    path: 'register',
    loadComponent: () =>
      import('./components/employee-registration/employee-registration')
        .then(m => m.EmployeeRegistration)
  },

  {
    path: 'register/:id',
    loadComponent: () =>
      import('./components/employee-registration/employee-registration')
        .then(m => m.EmployeeRegistration)
  },

  {
    path: 'employees',
    loadComponent: () =>
      import('./components/employee-list/employee-list')
        .then(m => m.EmployeeList)
  }

];