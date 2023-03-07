import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  userName;
  
  constructor(private _utilityService: UtilityService) {
  
    this._utilityService.userName.subscribe(res => {
      console.log('comp2', res);
      this.userName = res;
    })
   }

  ngOnInit() {
  }

  updateUserName(uname)
  {
    this.userName = uname.value;
    console.log(uname.value);
    this._utilityService.userName.next(uname.value);
  }

}
