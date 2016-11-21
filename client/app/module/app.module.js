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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('../component/app-component/app.component');
var dashboard_component_1 = require('../component/employee-component/dashboard.component');
var add_employee_component_1 = require('../component/employee-component/add-employee.component');
var footer_component_1 = require('../component/footer-component/footer.component');
var aboutus_component_1 = require('../component/aboutus-component/aboutus.component');
var control_messages_component_1 = require('../component/control-messages-component/control-messages.component');
var page_not_found_component_1 = require('../component/pageNotFound-component/page-not-found.component');
var employee_detail_component_1 = require('../component/employee-component/employee-detail.component');
var app_routing_1 = require('../route/app.routing');
var validation_service_1 = require('../service/validation.service');
var employee_service_1 = require('../service/employee.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.ReactiveFormsModule, http_1.HttpModule],
            declarations: [app_component_1.AppComponent, dashboard_component_1.DashboardComponent, footer_component_1.FooterComponent, add_employee_component_1.AddEmployeeComponent, control_messages_component_1.ControlMessagesComponent, aboutus_component_1.AboutusComponent, page_not_found_component_1.PageNotFoundComponent, employee_detail_component_1.EmployeeDetailComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [validation_service_1.ValidationService, employee_service_1.EmployeeService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map