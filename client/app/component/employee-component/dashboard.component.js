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
require('rxjs/add/operator/map');
var router_1 = require('@angular/router');
var employee_service_1 = require('../../service/employee.service');
var DashboardComponent = (function () {
    //allEmployees:Employee[];
    function DashboardComponent(_employeeService, router) {
        this._employeeService = _employeeService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getAllEmployees();
    };
    DashboardComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this.employees = [];
        this._employeeService.getEmployees()
            .map(function (res) { return res.json(); })
            .subscribe(function (employees) { return _this.employees = employees; });
    };
    DashboardComponent.prototype.gotoDetail = function (employee) {
        var link = ['/detail', employee._id];
        this.router.navigate(link);
    };
    DashboardComponent.prototype.deleteEmployee = function (employee) {
        var employees = this.employees;
        if (confirm("Are you comfirm ?")) {
            this._employeeService.deleteEmployee(employee._id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (data.n == 1) {
                    for (var i = 0; i < employees.length; i++) {
                        if (employees[i]._id == employee._id) {
                            employees.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    DashboardComponent.prototype.resetAll = function () {
        this.getAllEmployees();
    };
    DashboardComponent.prototype.searchEmployee = function (searchtext) {
        var _this = this;
        this._employeeService.searchEmployee(searchtext)
            .map(function (res) { return res.json(); })
            .subscribe(function (employees) { return _this.employees = employees; });
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
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/component/employee-component/dashboard-component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map