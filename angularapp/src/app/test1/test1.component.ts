import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  count: number = 0;
  firstName :string = 'Rocky'; 
  lastname: string = 'Bhai';
  @Input() child:string;
  @Output() fromChild : EventEmitter<string> = new EventEmitter<string>(); // (fromChild)
  constructor() { }

  ngOnInit() {
    console.log(this.child);
  }
  onButtonClick(){
    console.log('Button was clicked');
    let counts = this.count += 1;
  console.log(counts);
  
  }
  onKeyUp(value) {
    console.log('$event', value.target.value)
  }
  sendToParent() {
    this.fromChild.emit(this.lastname);
  }
  

}
