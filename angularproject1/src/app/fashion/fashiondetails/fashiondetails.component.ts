import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FashionService } from 'src/app/service/fashion.service';

@Component({
  selector: 'app-fashiondetails',
  templateUrl: './fashiondetails.component.html',
  styleUrls: ['./fashiondetails.component.css']
})
export class FashiondetailsComponent implements OnInit {
  product: any;

  constructor(private route: ActivatedRoute,private fashion:FashionService) { }

  
  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.product = this.fashion.getFashionItem(id);
  }

}


// products: any[];

// constructor(private fashionService: FashionService, private route: ActivatedRoute) { }

// ngOnInit() {
//   const categoryId = this.route.snapshot.params['categoryId'];
//   this.products = this.fashionService.getFashionItemsByCategory(categoryId);
// }
// }
