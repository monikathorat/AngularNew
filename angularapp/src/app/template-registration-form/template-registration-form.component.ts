import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-registration-form',
  templateUrl: './template-registration-form.component.html',
  styleUrls: ['./template-registration-form.component.css']
})
export class TemplateRegistrationFormComponent implements OnInit {


  cities:string[]=['Mumbai','Kolkata','Delhi'];
  defaultcity:string='Mumbai';
  genders=[{id:'1',value:'Male'},{id:'2',value:'Female'}];
  defaultgender:string='Female';
  cantactPattern = "^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"; 
  passPattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$";
  // pattern = "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,12}$";

   

  constructor() { }

  ngOnInit() {
  }
  login(form: NgForm) {
    console.log('Form Successfully Submitted');
console.log(form);
  }

}
