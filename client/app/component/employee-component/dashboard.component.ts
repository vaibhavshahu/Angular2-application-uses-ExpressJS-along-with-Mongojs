import { Component,OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';
import {EmployeeService} from '../../service/employee.service';
import {Employee} from '../../model/employee';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/component/employee-component/dashboard-component.html'
})
export class DashboardComponent implements OnInit{
  employees: Employee[];
  //allEmployees:Employee[];
   
   
  constructor(private _employeeService:EmployeeService, private router: Router){
    
  }  
  ngOnInit(){    
      this.getAllEmployees();
  }

  getAllEmployees(){
    this.employees = [];
    this._employeeService.getEmployees()
      .map(res => res.json())
      .subscribe(employees => this.employees = employees);
  }

  gotoDetail(employee){
    let link = ['/detail', employee._id];
    this.router.navigate(link);
  }

  deleteEmployee(employee) {
    var employees = this.employees;
      if (confirm("Are you comfirm ?")) {
              this._employeeService.deleteEmployee(employee._id)
              .map(res => res.json())
              .subscribe(data => {
                if(data.n == 1){
                  for(var i = 0;i < employees.length;i++){
                    if(employees[i]._id == employee._id){
                      employees.splice(i, 1);
                    }
                  }
                }
              }); 
      }
  }
  resetAll(){
    this.getAllEmployees();
  }

  searchEmployee(searchtext){
   this._employeeService.searchEmployee(searchtext)
      .map(res => res.json())
      .subscribe(employees => this.employees = employees);  
      this.getAllEmployees();
    /*
    var bool : Boolean;
    bool = false;
    var results = [];
    
    
    for (var i=0 ; i < this.employees.length ; i++)
    {
        if (this.employees[i]['name'].indexOf(searchtext) >= 0 
           || this.employees[i]['empid'].indexOf(searchtext) >= 0
           || this.employees[i]['email'].indexOf(searchtext) >= 0
           || this.employees[i]['phone'].indexOf(searchtext) >= 0) {
            results.push(this.employees[i]);
            bool = true;
        }
    }
   if(bool) 
    this.employees = results; */
  }

  
}