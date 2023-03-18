import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionService } from 'src/app/service/fashion.service';

@Component({
  selector: 'app-fashioncategory',
  templateUrl: './fashioncategory.component.html',
  styleUrls: ['./fashioncategory.component.css']
})
export class FashioncategoryComponent implements OnInit {
  category: string = '';
  products: any[] = [];

  constructor(private Clothing:FashionService) { }
  fashionItems: any[];
  ngOnInit() {
    this.fashionItems = this.Clothing.getFashionItems();
  }

  filterByCategory(category: string): void {
    this.category = category;
    this.products = this.Clothing.getProductsByCategory(category);
  }

  clearFilter(): void {
    
    this.products = this.Clothing.getFashionItems();
  }
}



// categories: any[];

// constructor(private fashionService: FashionService, private router: Router) { }

// ngOnInit() {
//   this.categories = this.fashionService.getCategories();
// }

// onSelect(category: any) {
//   this.router.navigate(['/fashion-products', category.id]);
// }
// }
