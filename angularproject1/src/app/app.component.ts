import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
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
  data : string = 'red';
  appchildExist:boolean = true;
  myObservable:any;

  constructor(private rapidapiservice: RapidapiService,private myservice:MyserviceService,private demoService:DemoService){

  }
  changeFromParent(){
    this.data += 1;
  }
  handleData(value) {
    this.data = value.target.value;
  }

  OnDestroy(){
    this.appchildExist = false;
  }

  ngOnInit(): void {


    // this.myObservable = of('This is custom obs').pipe(delay(3000)).subscribe(res =>{
    //   console.log('myObservable data',res);
      
    // })
    this.myObservable = of('This is custom observable').pipe(delay(3000));

    

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
