"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('../component/employee-component/dashboard.component');
var add_employee_component_1 = require('../component/employee-component/add-employee.component');
var aboutus_component_1 = require('../component/aboutus-component/aboutus.component');
var page_not_found_component_1 = require('../component/pageNotFound-component/page-not-found.component');
var employee_detail_component_1 = require('../component/employee-component/employee-detail.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'addEmployee',
        component: add_employee_component_1.AddEmployeeComponent
    },
    {
        path: 'detail/:id',
        component: employee_detail_component_1.EmployeeDetailComponent,
        data: {
            title: 'Employee detail'
        }
    },
    {
        path: 'aboutus',
        component: aboutus_component_1.AboutusComponent,
        data: {
            title: 'About Us'
        }
    },
    {
        path: '**',
        component: page_not_found_component_1.PageNotFoundComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map