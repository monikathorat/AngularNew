import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyserviceService } from '../service/myservice.service';

@Component({
  selector: 'app-reactive-from-assign',
  templateUrl: './reactive-from-assign.component.html',
  styleUrls: ['./reactive-from-assign.component.css']
})
export class ReactiveFromAssignComponent implements OnInit {


  myReactiveForm:FormGroup;
  isSubmitted=false;

  constructor() { 
    this.createForm();
  }

  ngOnInit() {
    let objService = new MyserviceService();
    objService.display();
  }
  createForm(){
    this.myReactiveForm = new FormGroup({
      
        'fullname' : new FormControl(null,Validators.required),
        'date' : new FormControl(null,Validators.required),
        'gender' : new FormControl(null,Validators.required),
        'country' : new FormControl(null,Validators.required),
        'phone' : new FormControl(null,Validators.required),
        'bio' : new FormControl(null,Validators.required),
        'username' : new FormControl(null,Validators.required),
        'email' : new FormControl(null,Validators.required),
        'password' : new FormControl(null,Validators.required),
        'confirmpassword' : new FormControl(null,Validators.required) 
    });
  }
    onSubmitt() {
      this.isSubmitted=true;
      // alert('method called');
      console.log('My ReactiveForm', this.myReactiveForm)
    }
    

  
  
}
