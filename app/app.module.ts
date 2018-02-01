import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

import {CustomerDashboardModule} from "./customer-dashboard/customer-dashboard.module";

import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

const routes
  : Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes, { useHash: true }),
    //Custom modules
    CustomerDashboardModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ]
})
export class AppModule {}
