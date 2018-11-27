import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'employees-list',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  title:string = "Employees";
  employees:any = [];
  constructor(private empService : EmployeesService) { }

  ngOnInit() {
    this.employees = this.empService.getEmployeesData();
  }

}
