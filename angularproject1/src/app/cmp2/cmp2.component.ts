import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../service/utility.service';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.css']
})
export class Cmp2Component implements OnInit {

  employee:any = 
  {name:' ', contact:' '}  
  
  constructor(private _utilityService: UtilityService) { 
    this._utilityService.name.subscribe(res => {
      console.log(`cmp2`, res);
      this.employee.name = res;
    });
      this._utilityService.contact.subscribe(res => {
        console.log(`cmp2`, res);
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
