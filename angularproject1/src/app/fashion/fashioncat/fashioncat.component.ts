import { Component, OnInit } from '@angular/core';
import { ClothingService } from 'src/app/service/clothing.service';
import { FashionService } from 'src/app/service/fashion.service';

@Component({
  selector: 'app-fashioncat',
  templateUrl: './fashioncat.component.html',
  styleUrls: ['./fashioncat.component.css']
})
export class FashioncatComponent implements OnInit {
  category: string = '';
  products: any[] = [];
  constructor(private fashionService:ClothingService) { }

  fashionItems: any[];
  ngOnInit() {
    this.fashionItems = this.fashionService.getFashionItems();
  }

  filterByCategory(category: string): void {
    this.category = category;
    this.products = this.fashionService.getProductsByCategory(category);
  }

  clearFilter(): void {
    
    this.products = this.fashionService.getFashionItems();
  }
}
