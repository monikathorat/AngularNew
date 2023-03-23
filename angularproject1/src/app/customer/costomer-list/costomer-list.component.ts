import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news';

import { RapidapiService } from 'src/app/service/rapidapi.service';

@Component({
  selector: 'app-costomer-list',
  templateUrl: './costomer-list.component.html',
  styleUrls: ['./costomer-list.component.css']
})
export class CostomerListComponent implements OnInit {

  

  news: any[];
  quotes: any[];

  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe((response: any) => {
      this.news = response.news;
      this.quotes = response.quotes;
    });
  }

}
