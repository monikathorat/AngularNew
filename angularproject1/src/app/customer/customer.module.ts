import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CostomerListComponent } from './costomer-list/costomer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CustomerRoutingModule } from './customer-routing.module';



@NgModule({
  declarations: [CostomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule {
  constructor(){
    console.log('CustomerModule called');
    
  }
 }
