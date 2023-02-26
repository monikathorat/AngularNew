import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigndirective',
  templateUrl: './assigndirective.component.html',
  styleUrls: ['./assigndirective.component.css']
})
export class AssigndirectiveComponent implements OnInit {

  pass:string = "ANGULAR DIRECTIVE ASSIGNMENT";
  count: Array<any> = [];
  constructor() {
    
   }
  ngOnInit() {
  }
  isShow = false;
  currentTime():any{
    const date = new Date();
    return date;
  }
  
  toggleDisplayDetails() {
    this.isShow = !this.isShow;
    // let counts=this.count +=1;
    // counts=this.count;
    // console.log(counts);
    this.count.push(this.count.length+1);
    }    

  // afterButtonClick()
  // {
  //   let counts=this.count +=1;
  //   console.log(counts);
    
  // }

}


 