package com.employee.service;

import java.util.List;

import com.employee.entity.Employee;

public interface EmployeeService {

    Employee saveEmployee(Employee employee);

    List<Employee> getAllEmployees();

    long getEmployeeCount();

    long getActiveEmployeeCount();

    long getInactiveEmployeeCount();

    Employee getEmployeeById(Long id);

    void deleteEmployee(Long id);

    Employee updateEmployee(Long id, Employee employee);
}