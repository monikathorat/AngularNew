import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { CanComponentLeave } from '../unsavedchanges.guard';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit,CanComponentLeave {

  msg;
  
  // DI 
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }

  login(username, password) {
   var result = this.authService.checkuser(username, password);
   if(result == true) {
    this.route.navigate(['/product']);
   } else {
    this.msg = 'Invalid user name or password'
   }
  }

  canLeave():  boolean{
    if(this.authService.checkuser){
      return window.confirm('You have some unsaved changes.Save it before leaving');
    }
    return true;
  }
}
