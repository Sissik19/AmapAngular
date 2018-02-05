import {NgModule} from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
//Service
import {CustomerDashboardService} from "./customer-dashboard.service";
import {CustomerDashboardComponent} from "./containers/customer-dashboard/customer-dashboard.component";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {CustomerDetailsComponent} from "./components/customer-details/customer-details.component";
import {RouterModule, Routes} from "@angular/router";
import {CustomerViewerComponent} from "./containers/customer-viewer/customer-viewer.component";
import {CustomerEditComponent} from "./components/customer-edit/customer-edit.component";

const routes : Routes = [
  {
    path: 'customers',
    children: [
      {path: '', component: CustomerDashboardComponent},
      {path: ':id', component: CustomerViewerComponent}
    ]
  }
];

@NgModule({
  declarations:[
    CustomerDashboardComponent,
    CustomerDetailsComponent,
    CustomerViewerComponent,
    CustomerEditComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    CustomerDashboardService
  ],
  exports: [
    CustomerDashboardComponent
  ]
})

export class CustomerDashboardModule{}
