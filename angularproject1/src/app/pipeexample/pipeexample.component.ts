import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {

  todaysDate = new Date();

  price: number = 70000;

  employee = {
    empid: '1',
    empname: 'Jack'
  }
  countLenght: number = 500;
  constructor() { }

  ngOnInit() {
  }
 

}
