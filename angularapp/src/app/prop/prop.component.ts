import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.css']
})
export class PropComponent implements OnInit {
   objEmp={
    name: 'Monika',
    city: 'Pandharpur',
    contact: 7620784232
  }
  
  @Output() frmChild: EventEmitter<object>= new EventEmitter<object>();
  showdetails = false;
  onButtonEvent(){
    this.showdetails=!this.showdetails;
  }

  constructor() {
    
   }
   

  ngOnInit() {
      
  }
  fromChildToParent(){
    this.frmChild.emit(this.objEmp);
  }

  

}
