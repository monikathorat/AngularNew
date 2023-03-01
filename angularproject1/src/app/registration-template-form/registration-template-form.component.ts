import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-registration-template-form',
  templateUrl: './registration-template-form.component.html',
  styleUrls: ['./registration-template-form.component.css']
})
export class RegistrationTemplateFormComponent implements OnInit {

  cities:string[]=['Mumbai','Kolkata','Delhi'];
  defaultcity:string='Mumbai';
  genders=[{id:'1',value:'Male'},{id:'2',value:'Female'}];
  defaultgender:string='Female';
  cantactPattern = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"; 
  passPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$";
  // pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$";

   

  constructor(private objService: MyserviceService ) { }

  ngOnInit() {
    
    this.objService.print();
  }
  
  login(form: NgForm) {
    console.log('Form Successfully Submitted');
console.log(form);
  }
  

}
