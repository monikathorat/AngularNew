import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wikipage',
  templateUrl: './wikipage.component.html',
  styleUrls: ['./wikipage.component.css']
})
export class WikipageComponent implements OnInit {

  @Input() pages = [];
  @Input() isLoading:boolean;
  // isLoading:boolean;
  constructor() { }

  ngOnInit() {
  }

}
