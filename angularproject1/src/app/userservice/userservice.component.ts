import { Component, OnInit } from '@angular/core';
import { DemoService } from '../service/demo.service';

@Component({
  selector: 'app-userservice',
  templateUrl: './userservice.component.html',
  styleUrls: ['./userservice.component.css']
})
export class UserserviceComponent implements OnInit {

  userData:any=[];
  namesearch: string = '';
  constructor(private demoService:DemoService) { }

  ngOnInit() {
    this.demoService.getUsers().subscribe(res=>{
      console.log(res);      
      this.userData=res;
    })
  }

}
