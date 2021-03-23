import { Component, OnInit } from '@angular/core';
import { GetEmployeeComponent } from './get-employee.component';
import { Observable } from "rxjs";
import { EmployeeService } from "../employee.service";
import { Employee } from "../employee";
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css']
})

export class GetEmployeeComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
}