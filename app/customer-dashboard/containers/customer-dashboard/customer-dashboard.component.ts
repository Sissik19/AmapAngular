import {Component, OnInit} from "@angular/core";


import {Customer} from "../../models/customer.interface";
import {CustomerDashboardService} from "../../customer-dashboard.service";
import {Router} from "@angular/router";


@Component({
  selector: 'customer-dashboard',
  styleUrls: ['customer-dashboard.component.scss'],
  templateUrl: './customer-dashboard.component.html'
})

export class CustomerDashboardComponent implements OnInit{
  customers : Customer[];
  constructor(
    private customerService: CustomerDashboardService,
    private router : Router
  ){}

  ngOnInit(){
    this.customerService.getCustomers().subscribe((data: Customer[])=>this.customers = data);
  }

  handleEdit(event : Customer){
    this.customerService
      .updateCustomer(event)
      .subscribe((data : Customer)=>{
        this.customers = this.customers.map((customer : Customer)=>{
          if(customer.id === event.id){
            customer = Object.assign({}, customer, event);
          }
          return customer;
        });
      });
  }
  handleRemove(event : Customer){
    this.customerService
      .removeCustomer(event)
      .subscribe((data: Customer)=>{
        this.customers = this.customers.filter((customer: Customer)=> {
          return customer.id !== event.id;
        });
      });
  }
  handleView(event : Customer){
    this.router.navigate(['/customers/', event.id])
  }
}
