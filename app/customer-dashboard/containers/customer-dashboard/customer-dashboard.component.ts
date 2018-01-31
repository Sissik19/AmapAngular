import {Component, OnInit} from "@angular/core";


import {Customer} from "../../models/customer.interface";
import {CustomerDashboardService} from "../../customer-dashboard.service";

@Component({
  selector: 'customer-dashboard',
  styleUrls: ['customer-dashboard.component.scss'],
  templateUrl: './customer-dashboard.component.html'
})

export class CustomerDashboardComponent implements OnInit{
  customers : Customer[];
  constructor(private customerService: CustomerDashboardService){}

  ngOnInit(){
    this.customerService.getCustomers().subscribe((data: Customer[])=>this.customers = data);
  }
}
