import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";

import {Customer} from "../../models/customer.interface";
import {FormControl, FormGroup} from "@angular/forms";


@Component({
  selector : 'customer-details',
  styleUrls: ['customer-details.component.scss'],
  templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent implements OnChanges{

  searchForm = new FormGroup({
    name : new FormControl(),
    firstName : new FormControl(),
    accountCheck : new FormControl()
  });

  filterCustomer: Customer[];
  check: boolean= false;

  @Input()
  customers : Customer[];

  @Output()
  remove : EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  view: EventEmitter<Customer> = new EventEmitter<Customer>();


  constructor(){}

  ngOnChanges(){
    this.filterCustomer = this.customers;
  }

  onView(customer : Customer){
    this.view.emit(customer);
  }

  onRemove(customer : Customer){
    this.remove.emit(customer);
  }

  filter(){
    if(this.searchForm.value.name != null){
      this.filterCustomer = this.customers.filter(customer =>{
        if(customer.name.toLowerCase().indexOf(this.searchForm.value.name.toLowerCase())!=-1) {
          return customer;
        }
      });
    }else{
      this.filterCustomer = this.customers;
    }
    if(this.searchForm.value.firstName != null) {
      this.filterCustomer = this.filterCustomer.filter(customer => {
        if (customer.firstName.toLowerCase().indexOf(this.searchForm.value.firstName.toLowerCase()) != -1) {
          return customer;
        }
      });
    }
    if(this.searchForm.value.accountCheck != null){
      if(this.searchForm.value.accountCheck==true){
        this.filterCustomer = this.filterCustomer.filter(customer => customer.bankAccount<=0)
      }
    }
  }

  tri(){
    this.filterCustomer.sort(function(a,b){
      return a.firstName.localeCompare(b.firstName);
    });
  }
}
