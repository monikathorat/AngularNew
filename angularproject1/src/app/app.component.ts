import { Component } from '@angular/core';
import { DemoService } from './service/demo.service';
import { MyserviceService } from './service/myservice.service';
import { RapidapiService } from './service/rapidapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularproject1';
  products={};
  
  constructor(private rapidapiservice: RapidapiService,private myservice:MyserviceService,private demoService:DemoService){

  }
  ngOnInit(): void {
    this.rapidapiservice.getFinance().subscribe(res=>{
      console.log('rapid res',res);      
    });

    this.products = this.myservice.products;

    this.demoService.getUsers().subscribe(res => {
      console.log('user api results', res);
    }, err => {
      console.log(err);
    })
    
  }
}
