import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Customer} from "../../models/customer.interface";
import {CustomerDashboardService} from "../../customer-dashboard.service";

@Component({
  selector: 'customer-viewer',
  styleUrls: ['customer-viewer.component.scss'],
  templateUrl: 'customer-viewer.component.html'
})

export class CustomerViewerComponent implements OnInit{

  customer: Customer;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private customerService : CustomerDashboardService
  ){}
  ngOnInit(){
    this.route.params
      .switchMap((data: Customer) => this.customerService.getCustomer(data.id))
      .subscribe((data: Customer) => this.customer = data);
  }
  onEditCustomer(event: Customer){
    this.customerService
      .updateCustomer(event)
      .subscribe((data: Customer)=> {
        this.customer = Object.assign({}, this.customer, event);
      });
  }
  goBack(){
    this.router.navigate(['/customers']);
  }

}
