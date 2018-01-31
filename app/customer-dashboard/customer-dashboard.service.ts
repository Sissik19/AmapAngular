import {Http, Response, Headers, RequestOptions} from "@angular/http";
import{Injectable} from "@angular/core";

import {Customer} from "./models/customer.interface";

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const CUSTOMER_API: string  = '/api/customers';

@Injectable()
export class CustomerDashboardService{
  constructor(private http: Http){}

  getCustomers(): Observable<Customer[]>{
    return this.http
      .get(CUSTOMER_API)
      .map((response: Response)=> response.json())
      .catch((error: any)=> Observable.throw(error.json()));
  }

  getCustomer(id: number): Observable<Customer>{
    return this.http
      .get(`${CUSTOMER_API}/${id}`)
      .map((response: Response)=> response.json())
      .catch((error: any)=> Observable.throw(error.json()));
  }

  updateCustomer(customer : Customer): Observable<Customer>{
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({
      headers: headers
    });
    return this.http
      .put(`${CUSTOMER_API}/${customer.id}`, customer, options)
      .map((response: Response)=> response.json())
      .catch((error: any)=> Observable.throw(error.json()));
  }

  removeCustomer(customer : Customer): Observable<Customer>{
    return this.http
      .delete(`${CUSTOMER_API}/${customer.id}`)
      .map((response: Response)=> response.json())
      .catch((error: any)=> Observable.throw(error.json()));
  }
}
