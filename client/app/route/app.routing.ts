import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }      from '../component/employee-component/dashboard.component';
import { AddEmployeeComponent }      from '../component/employee-component/add-employee.component';
import { AboutusComponent }      from '../component/aboutus-component/aboutus.component';
import { PageNotFoundComponent }      from '../component/pageNotFound-component/page-not-found.component';
import { EmployeeDetailComponent }   from '../component/employee-component/employee-detail.component';


const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent
  },
  {
    path: 'detail/:id',
    component: EmployeeDetailComponent,
    data: {
          title: 'Employee detail'
    }
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
    data: {
          title: 'About Us'
    }
  },
  { 
    path: '**',
    component: PageNotFoundComponent
  }  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });
