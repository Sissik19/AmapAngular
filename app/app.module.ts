import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CustomerDashboardModule} from "./customer-dashboard/customer-dashboard.module";
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    //Custom modules
    CustomerDashboardModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
  ]
})
export class AppModule {}
