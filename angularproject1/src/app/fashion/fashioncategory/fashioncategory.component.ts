import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FashionService } from 'src/app/service/fashion.service';

@Component({
  selector: 'app-fashioncategory',
  templateUrl: './fashioncategory.component.html',
  styleUrls: ['./fashioncategory.component.css']
})
export class FashioncategoryComponent implements OnInit {
  fashionItems: any[];

  constructor(private fashion:FashionService) { }

  ngOnInit() {
    this.fashionItems = this.fashion.getFashionItems();

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
