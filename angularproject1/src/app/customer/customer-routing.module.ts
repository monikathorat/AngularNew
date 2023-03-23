import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CostomerListComponent } from './costomer-list/costomer-list.component';


const customerRoutes:Routes=[
  {path:'',component:CostomerListComponent}
];


@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
