import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.css']
})
export class Cmp1Component implements OnInit {

 
  employee:any = 
  {name:' ', contact:' '}  
  
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.name.subscribe(res => {
      console.log(`cmp1`, res);
      this.employee.name = res;
    });
      this._utilityService.contact.subscribe(res => {
        console.log(`cmp1`, res);
      this.employee.contact = res;
    });
   }

  ngOnInit() {
  }
  updateEmpDetails(ename,econtact){
    this.employee.name = ename.value;
    console.log(ename.value);
    this.employee.contact = econtact.value;
    console.log(econtact.value);
    
    this._utilityService.name.next(ename.value);
    this._utilityService.contact.next(econtact.value);
    
  } 
}

