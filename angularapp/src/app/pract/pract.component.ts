import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pract',
  templateUrl: './pract.component.html',
  styleUrls: ['./pract.component.css']
})
export class PractComponent implements OnInit {

  name: string = 'Monika';
  twoWay:string = 'two way data binding';
  getName(value:string){
    console.log(value);
  }
  data:Array<any>= [
    {id:'1',nickName:'kiki'},{id:'2',nickName:'gigi'}
  ];
  show:boolean = false;
  color:string = "123";

  constructor() { }
  @Input() prop: number;
  @Output() practEvent : EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }
  sendDataToParent(){
    this.practEvent.emit(this.name);
  }

}
