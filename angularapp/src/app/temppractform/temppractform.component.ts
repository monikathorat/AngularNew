import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms' 

@Component({
  selector: 'app-temppractform',
  templateUrl: './temppractform.component.html',
  styleUrls: ['./temppractform.component.css']
})
export class TemppractformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

login(form: NgForm) {
  console.log(form.value)
}
  
}
