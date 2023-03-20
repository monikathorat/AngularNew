import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-wikisearch',
  templateUrl: './wikisearch.component.html',
  styleUrls: ['./wikisearch.component.css']
})
export class WikisearchComponent implements OnInit {

  @Output() submitted =  new EventEmitter<string>();
  space = '';  
  
    constructor() { }
  
    ngOnInit(): void {
      
    }
    onFormSubmit(event:any){
     this.submitted.emit(this.space);
      
    }

}
