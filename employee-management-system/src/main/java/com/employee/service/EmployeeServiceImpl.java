package com.employee.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.employee.entity.Employee;
import com.employee.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private final EmployeeRepository employeeRepository;


    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }


    @Override
    public Employee saveEmployee(Employee employee) {

        return employeeRepository.save(employee);

    }


    @Override
    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();

    }


    @Override
    public Employee getEmployeeById(Long id) {

        return employeeRepository.findById(id).orElse(null);

    }


    @Override
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existingEmployee = employeeRepository.findById(id)
                .orElse(null);


        if(existingEmployee != null) {

            existingEmployee.setFirstName(employee.getFirstName());
            existingEmployee.setLastName(employee.getLastName());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setMobile(employee.getMobile());
            existingEmployee.setDepartment(employee.getDepartment());
            existingEmployee.setDesignation(employee.getDesignation());
            existingEmployee.setSalary(employee.getSalary());


            return employeeRepository.save(existingEmployee);
        }


        return null;
    }


    @Override
    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);

    }
    
    //Employee Count
    @Override
    public long getEmployeeCount() {

        return employeeRepository.count();

    }


	@Override
	public long getActiveEmployeeCount() {
		// TODO Auto-generated method stub
		return employeeRepository.countByStatus("ACTIVE");
	}


	@Override
	public long getInactiveEmployeeCount() {
		// TODO Auto-generated method stub
		return employeeRepository.countByStatus("INACTIVE");
	}
    
   

}