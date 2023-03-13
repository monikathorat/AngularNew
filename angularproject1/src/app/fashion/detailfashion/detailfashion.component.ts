import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClothingService } from 'src/app/service/clothing.service';
import { FashionService } from 'src/app/service/fashion.service';

@Component({
  selector: 'app-detailfashion',
  templateUrl: './detailfashion.component.html',
  styleUrls: ['./detailfashion.component.css']
})
export class DetailfashionComponent implements OnInit {

  constructor(private fashionService:ClothingService,private route:ActivatedRoute) { }

  product: any;
  

  ngOnInit(): void {
    const id =  this.route.snapshot.paramMap.get('id');
    this.product = this.fashionService.getFashionItem(id);
  }

}
