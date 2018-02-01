import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Customer} from "../../models/customer.interface";


@Component({
  selector : 'customer-details',
  styleUrls: ['customer-details.component.scss'],
  templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent{

  @Input()
  customers : Customer[];

  @Output()
  remove : EventEmitter<Customer> = new EventEmitter<Customer>();

  @Output()
  view: EventEmitter<Customer> = new EventEmitter<Customer>();

  constructor(){}

  onView(customer : Customer){
    this.view.emit(customer);
  }

  onRemove(customer : Customer){
    this.remove.emit(customer);
  }

}
