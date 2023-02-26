import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-assign',
  templateUrl: './template-form-assign.component.html',
  styleUrls: ['./template-form-assign.component.css']
})
export class TemplateFormAssignComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
  }
  login(form:NgForm){
    
    console.log(form);
    form.reset();    
  }

}
