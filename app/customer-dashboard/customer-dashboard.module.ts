import {NgModule} from "@angular/core";

//Service
import {CustomerDashboardService} from "./customer-dashboard.service";
import {CustomerDashboardComponent} from "./containers/customer-dashboard/customer-dashboard.component";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";

@NgModule({
  declarations:[
    CustomerDashboardComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    CustomerDashboardService
  ],
  exports: [
    CustomerDashboardComponent
  ]
})

export class CustomerDashboardModule{}
