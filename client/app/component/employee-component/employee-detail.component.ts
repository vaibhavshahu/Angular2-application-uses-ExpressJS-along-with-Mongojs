import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';
import 'rxjs/add/operator/map';
import { Employee} from '../../model/employee';

@Component({
    moduleId:module.id,
    selector: 'my-detail',
    templateUrl: 'employee-detail.component.html'
})

export class EmployeeDetailComponent implements OnInit {    
    employee: Employee[]; 

    constructor(
        private _employeeService: EmployeeService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
        let id = params['id'];
         
        this._employeeService.getEmployee(id)
       .map(res => res.json())
       .subscribe(employee => this.employee = employee);        
       
        });
    }  

    goBack() {
        window.history.back();
    }
}