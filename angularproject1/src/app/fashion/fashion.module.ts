import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashioncategoryComponent } from './fashioncategory/fashioncategory.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [FashioncategoryComponent, FashiondetailsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
