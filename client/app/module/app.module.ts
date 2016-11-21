import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent }   from '../component/app-component/app.component';
import { DashboardComponent }   from '../component/employee-component/dashboard.component';
import { AddEmployeeComponent }   from '../component/employee-component/add-employee.component';
import { FooterComponent }   from '../component/footer-component/footer.component';
import { AboutusComponent }   from '../component/aboutus-component/aboutus.component';
import { ControlMessagesComponent }   from '../component/control-messages-component/control-messages.component';
import { PageNotFoundComponent }      from '../component/pageNotFound-component/page-not-found.component';
import { EmployeeDetailComponent }   from '../component/employee-component/employee-detail.component';


import{routing} from '../route/app.routing';

import {ValidationService} from '../service/validation.service';
import {EmployeeService} from '../service/employee.service';

@NgModule({
  imports:      [ BrowserModule,routing,ReactiveFormsModule,HttpModule ],
  declarations: [ AppComponent,DashboardComponent,FooterComponent,AddEmployeeComponent,ControlMessagesComponent,AboutusComponent,PageNotFoundComponent,EmployeeDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers :   [ ValidationService,EmployeeService ]
})
export class AppModule { }
