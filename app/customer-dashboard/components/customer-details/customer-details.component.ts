import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from "@angular/core";

import {Customer} from "../../models/customer.interface";


@Component({
  selector : 'customer-details',
  styleUrls: ['customer-details.component.scss'],
  templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent implements OnChanges{
  filterCustomer: Customer[];
  check: boolean= true;

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

  filterName(value : string){
    if(value==""){
      this.filterCustomer = this.customers;
    }else{
      this.filterCustomer = this.filterCustomer.filter(customer => customer.name.toLowerCase().indexOf(value.toLowerCase())!=-1)
    }
  }

  filterFirstName(value : string){
    if(value==""){
      this.filterCustomer = this.customers;
    }else{
      this.filterCustomer = this.filterCustomer.filter(customer => customer.firstName.toLowerCase().indexOf(value.toLowerCase())!=-1)
    }
  }

  filterByAccount(){
    if(this.check==true){
      this.filterCustomer = this.filterCustomer.filter(customer => customer.bankAccount<=0)
      this.check = false;
    }else{
      this.check = true;
      this.filterCustomer = this.customers;
    }


  }

}
