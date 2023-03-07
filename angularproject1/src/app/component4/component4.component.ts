import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

 
  userName;
 
  constructor(private _utilityService: UtilityService) {
   
    this._utilityService.userName.subscribe(res => {
      console.log('comp4', res);
      this.userName = res;
    });
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
