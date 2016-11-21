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
var router_1 = require('@angular/router');
var employee_service_1 = require('../../service/employee.service');
require('rxjs/add/operator/map');
var EmployeeDetailComponent = (function () {
    function EmployeeDetailComponent(_employeeService, route) {
        this._employeeService = _employeeService;
        this.route = route;
    }
    EmployeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            _this._employeeService.getEmployee(id)
                .map(function (res) { return res.json(); })
                .subscribe(function (employee) { return _this.employee = employee; });
        });
    };
    EmployeeDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    EmployeeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-detail',
            templateUrl: 'employee-detail.component.html'
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService, router_1.ActivatedRoute])
    ], EmployeeDetailComponent);
    return EmployeeDetailComponent;
}());
exports.EmployeeDetailComponent = EmployeeDetailComponent;
//# sourceMappingURL=employee-detail.component.js.map