"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var validation_service_1 = require('../../service/validation.service');
var employee_service_1 = require('../../service/employee.service');
require('rxjs/add/operator/map');
var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(http, employeeService, formBuilder, router) {
        this.http = http;
        this.employeeService = employeeService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.employees = [];
        this.isLoading = true;
        this.formActive = true;
        this.employee = {};
        this.isEditing = false;
        this.infoMsg = { body: "", type: "info" };
        this.marital = ['married', 'unmarried'];
        this.isEmp = false;
        this.employeeForm();
    }
    AddEmployeeComponent.prototype.employeeForm = function () {
        this.userForm = this.formBuilder.group({
            'empid': ['', forms_1.Validators.required],
            'name': ['', [forms_1.Validators.required, validation_service_1.ValidationService.alphaValidator]],
            'email': ['', [forms_1.Validators.required, validation_service_1.ValidationService.emailValidator]],
            'phone': ['', [forms_1.Validators.required, validation_service_1.ValidationService.validMobileValidator]],
            'photo': ['', [forms_1.Validators.required, validation_service_1.ValidationService.validImageValidator]],
            'marital_status': ['', forms_1.Validators.required],
            'state': ['', forms_1.Validators.required],
            'city': ['', forms_1.Validators.required]
        });
        // if you have only single then don't use square bracket, use like this 'name': ['', Validators.required],'
        console.log(this.userForm);
    };
    AddEmployeeComponent.prototype.saveEmployee = function () {
        if (this.userForm.dirty && this.userForm.valid) {
            //save code here    
            //validation for email & empid
            console.log("44444");
            console.log(this.isEmp);
            this.isEmpidExist(this.userForm.value.empid);
            console.log("55555");
            console.log(this.isEmp);
            if (this.isEmp) {
            }
            else {
                var result;
                result = this.employeeService.addEmployee(this.userForm.value);
                result.subscribe(function (x) {
                });
                this.router.navigate(['/dashboard']);
            }
        }
    };
    AddEmployeeComponent.prototype.resetform = function () {
        var _this = this;
        this.employeeForm();
        this.formActive = false;
        setTimeout(function () {
            _this.formActive = true;
        }, 0);
    };
    AddEmployeeComponent.prototype.sendInfoMsg = function (body, type, time) {
        var _this = this;
        if (time === void 0) { time = 3000; }
        this.infoMsg.body = body;
        this.infoMsg.type = type;
        window.setTimeout(function () { return _this.infoMsg.body = ""; }, time);
    };
    AddEmployeeComponent.prototype.goBack = function () {
        if (this.userForm.touched) {
            if (confirm("Are you sure you want to leave this page ?")) {
                this.router.navigate(['/dashboard']);
            }
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    AddEmployeeComponent.prototype.isEmpidExist = function (empid) {
        var _this = this;
        this.employeeService.isEmpidExist(empid)
            .map(function (res) { return res.json(); })
            .subscribe(function (isEmp) { return _this.isEmp = isEmp; });
    };
    AddEmployeeComponent = __decorate([
        core_1.Component({
            selector: 'add-employee',
            templateUrl: 'app/component/employee-component/add-employee-component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, employee_service_1.EmployeeService, forms_1.FormBuilder, router_1.Router])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());
exports.AddEmployeeComponent = AddEmployeeComponent;
//# sourceMappingURL=add-employee.component.js.map