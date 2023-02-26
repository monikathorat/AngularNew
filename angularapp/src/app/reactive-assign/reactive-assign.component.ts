import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assign',
  templateUrl: './reactive-assign.component.html',
  styleUrls: ['./reactive-assign.component.css']
})
export class ReactiveAssignComponent implements OnInit {

  myReactiveForm: FormGroup;
  isSubmitted: boolean = false;
  // minDate:any= '02/22/2023';
  // currentDate:any = '2023-02-22';
  
  
  constructor() {
    this.createForm();
   }

  ngOnInit() {
    // this.minDate = new Date();
    // this.currentDate = new Date();
  }
  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  
  createForm(){
    this.myReactiveForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'subscription': new FormControl('Advanced'),
      'password': new FormControl(null,Validators.required),
      'date' : new FormControl(null,Validators.required)
      
    })
  }
 
  OnSubmit() {
     console.log('form submitted successfully')
    console.log('My ReactiveForm', this.myReactiveForm)
    this.isSubmitted=true;
    }

}











