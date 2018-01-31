import {Component, Input} from "@angular/core";
import {Customer} from "../../models/customer.interface";

@Component({
  selector : 'customer-details',
  styleUrls: ['customer-details.component.scss'],
  templateUrl: 'customer-details.component.html'
})

export class CustomerDetailsComponent{

  @Input()
  oneCustomer : Customer;

  constructor(){}

}
