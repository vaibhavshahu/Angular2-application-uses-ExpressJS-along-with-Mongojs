import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class EmployeeService {

    private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    private options = new RequestOptions({ headers: this.headers });

    constructor (private http: Http) {}

    getEmployees() {
        return this.http.get('/api/v1/employees');
    }

    getEmployee(id) {
        return this.http.get('/api/v1/employee/'+id);
    }
    
    addEmployee(employee){                
        return this.http.post('/api/v1/employee', JSON.stringify(employee),{headers: this.headers})
            .map(res => res.json());
    }
    
    searchEmployee(qry){
        return this.http.get('/api/v1/searchemployee/'+qry);
    }

    editEmployee(employee) {
        return this.http.put("/employee/"+employee._id, JSON.stringify(employee), this.options);
    }

    deleteEmployee(id) {        
        return this.http.delete('/api/v1/employee/'+id);
    }

    isEmpidExist(empid:string){
       return this.http.get('/api/v1/checkEmpId/'+empid); 
    }

}
