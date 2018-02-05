import {Component, Input, Output, OnChanges, EventEmitter} from "@angular/core";

import {Customer} from "../../models/customer.interface";


@Component({
  selector : 'customer-edit',
  styleUrls: ['customer-edit.component.scss'],
  templateUrl: 'customer-edit.component.html'
})

export class CustomerEditComponent implements OnChanges{

  @Input()
  customer : Customer;

  @Output()
  edit : EventEmitter<Customer> = new EventEmitter<Customer>();

  editName : boolean = false;
  editFirstName : boolean = false;
  editMail: boolean = false;
  editTel: boolean = false;

  constructor(){}

  ngOnChanges(changes){
    console.dir(this.customer);
    if(changes.customer){
      this.customer = Object.assign({}, changes.customer.currentValue);
    }
  }

  toggleEdit(param: string){
    switch(param) {
      case "name":
        if(this.editName){
          this.edit.emit(this.customer);
        }
        this.editName = !this.editName;
        break;
      case "firstName":
        if(this.editFirstName){
          this.edit.emit(this.customer);
        }
        this.editFirstName = !this.editFirstName;
        break;
      case "mail":
        if(this.editMail){
        this.edit.emit(this.customer);
      }
        this.editMail = !this.editMail;
        break;
      case "tel":
        if(this.editTel){
          this.edit.emit(this.customer);
        }
        this.editTel = !this.editTel;
        break;
      default:
        console.log("Error!! param to modify correspond to anything");
        break;
    }
  }

  onEdit(value: string, param: string){
    switch(param) {
      case "name":
        this.customer.name = value;
        break;
      case "firstName":
        this.customer.firstName = value;
        break;
      case "mail":
        this.customer.mail = value;
        break;
      case "tel":
        this.customer.tel = value;
        break;
      default:
        console.log("Error!! param to modify correspond to anything");
        break;
    }
  }

}
