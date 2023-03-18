import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashioncategoryComponent } from './fashioncategory/fashioncategory.component';
import { FashiondetailsComponent } from './fashiondetails/fashiondetails.component';
import { RouterModule } from '@angular/router';
import { FashioncatComponent } from './fashioncat/fashioncat.component';
import { DetailfashionComponent } from './detailfashion/detailfashion.component';




@NgModule({
  declarations: [FashioncategoryComponent, FashiondetailsComponent, FashioncatComponent, DetailfashionComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
