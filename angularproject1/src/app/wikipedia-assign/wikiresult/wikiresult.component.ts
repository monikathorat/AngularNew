import { Component, OnInit } from '@angular/core';
import { WikiService } from 'src/app/service/wiki.service';

@Component({
  selector: 'app-wikiresult',
  templateUrl: './wikiresult.component.html',
  styleUrls: ['./wikiresult.component.css']
})
export class WikiresultComponent implements OnInit {

  isLoading = false;
  constructor(private _wikipediaService: WikiService) {}
  ngOnInit(): void {
    
  }
  pages = [];
  onTerm(space: string) {
    this.isLoading = true;
    this._wikipediaService.search(space).subscribe((res: any) => {
      this.pages = res.query.search;
      console.log(this.pages);
      this.isLoading = false;
    });
  }

}
