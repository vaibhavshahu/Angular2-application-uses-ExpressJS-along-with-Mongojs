import { Component } from '@angular/core';
import {Http} from '@angular/http';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ValidationService } from '../../service/validation.service';
import { EmployeeService } from '../../service/employee.service';

import 'rxjs/add/operator/map';

@Component({
  selector: 'add-employee',
  templateUrl: 'app/component/employee-component/add-employee-component.html'
})
export class AddEmployeeComponent{
  userForm: any;
  public isEmp : Boolean;
  private employees = [];
	private isLoading = true;
  formActive = true;
	private employee = {};
	private isEditing = false;
  private infoMsg = { body: "", type: "info"};

  marital = ['married','unmarried'];

  constructor(private http: Http,private employeeService: EmployeeService,private formBuilder: FormBuilder,private router: Router) {
    this.isEmp = false;
    this.employeeForm();
        
  }

  employeeForm(){
    this.userForm = this.formBuilder.group({
      'empid': ['', Validators.required],
      'name': ['', [Validators.required, ValidationService.alphaValidator]],
      'email': ['', [Validators.required, ValidationService.emailValidator]],
      'phone': ['', [Validators.required, ValidationService.validMobileValidator]],
      'photo': ['',[Validators.required,ValidationService.validImageValidator]],
      'marital_status': ['', Validators.required],
      'state': ['', Validators.required],
      'city': ['', Validators.required]
    });
    // if you have only single then don't use square bracket, use like this 'name': ['', Validators.required],'
    console.log(this.userForm);
  }

  saveEmployee() {
    if (this.userForm.dirty && this.userForm.valid) {
       //save code here    

       //validation for email & empid
       console.log("44444");
       console.log(this.isEmp);
       this.isEmpidExist(this.userForm.value.empid); 
       console.log("55555");
       console.log(this.isEmp);
       if(this.isEmp){
         
       }
       else{       
        var result;
        result = this.employeeService.addEmployee(this.userForm.value);
        result.subscribe(x => {        
        });
        this.router.navigate(['/dashboard']);
       }      
    }
  }

  resetform(){
    this.employeeForm();
    this.formActive = false;
    setTimeout(() => {
      this.formActive = true;
    }, 0);
  }

  sendInfoMsg(body, type, time = 3000) {
		this.infoMsg.body = body;
		this.infoMsg.type = type;
		window.setTimeout(() => this.infoMsg.body = "", time);
	}

  goBack(){
     if(this.userForm.touched){
       if (confirm("Are you sure you want to leave this page ?")) {
         this.router.navigate(['/dashboard']);
       }
     }
     else{
       this.router.navigate(['/dashboard']);
     }
  }

  isEmpidExist(empid){    
     this.employeeService.isEmpidExist(empid)
          .map(res => res.json())
          .subscribe(isEmp => this.isEmp = isEmp);    
  }

}