import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FashioncatComponent } from './fashioncat/fashioncat.component';
import { DetailfashionComponent } from './detailfashion/detailfashion.component';




@NgModule({
  declarations: [ FashioncatComponent, DetailfashionComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class FashionModule { }
