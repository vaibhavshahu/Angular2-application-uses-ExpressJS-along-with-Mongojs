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
require('rxjs/add/operator/map');
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
        this.options = new http_1.RequestOptions({ headers: this.headers });
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get('/api/v1/employees');
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get('/api/v1/employee/' + id);
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post('/api/v1/employee', JSON.stringify(employee), { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    EmployeeService.prototype.searchEmployee = function (qry) {
        return this.http.get('/api/v1/searchemployee/' + qry);
    };
    EmployeeService.prototype.editEmployee = function (employee) {
        return this.http.put("/employee/" + employee._id, JSON.stringify(employee), this.options);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete('/api/v1/employee/' + id);
    };
    EmployeeService.prototype.isEmpidExist = function (empid) {
        return this.http.get('/api/v1/checkEmpId/' + empid);
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map