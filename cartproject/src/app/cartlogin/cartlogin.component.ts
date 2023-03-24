import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
//import { cart, login, product } from '../models/products';
import { cart, login } from '../models/products';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cartlogin',
  templateUrl: './cartlogin.component.html',
  styleUrls: ['./cartlogin.component.css']
})
export class CartloginComponent implements OnInit {

  $:any;
  myReactiveForm: FormGroup;
  //isSubmitted: boolean = false; 
  showLogin:boolean=true ;
  login:FormGroup|any;
  
  constructor(private loginService: LoginService, private router:Router,private product:ProductService,private _http:HttpClient) {
    //this.createForm();
   }

  ngOnInit() {
    this.login = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
       'password': new FormControl(null,Validators.required) 
    })
    
  } 
  logindata(login:FormGroup){
    // console.log(this.login.value);
     this._http.get<any>("http://localhost:3000/signup")
     .subscribe(res=>{
       const user = res.find((a:any)=>{
         return a.email === this.login.value.email && a.password === this.login.value.password
       });

       
      if(user){
        alert('you are successfully login');
        this.login.reset();
        //$('.form-box').css('display','none');
        this.router.navigate(['home']);
      }else{
        alert('User Not Found');
        this.router.navigate(['signup']);
      }

    }, err=>{
      alert('Something was wrong');
    })

    
  }

  sbtn1(){
    this.router.navigate(['signup']);
  
  }

}
  





   

