import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CanComponentLeave } from '../unsavedchanges.guard';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements  CanComponentLeave{

  userName : FormControl = new FormControl();
  constructor() { }
  
  canLeave():  boolean{
    if(this.userName.dirty){
      return window.confirm('You have some unsaved changes.Save it before leaving');
    }
    return true;
  }

  

}
