import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'data-binding-app';
  Username:string = "";
  parentToChild: string = "I am coming from parent";
  fromParent: string = "From parent to child";

  onParent(val) {
    console.log('from child to parent', val);
  }

  inParentFromChild(value: any){
    console.log('from child',value);
    
  }   
  
   posts = [
    {
      title:'Pam Tree',
      content:'I love this tree'
    },
    {
      title:'Mango Tree',
      content:'I love this tree'
    }
   ]

   practChild:number = 50;
   practFun(res:string){
    console.log(res)
   }
   
 
  
}

 
  






  //  Clear(){
  //   this.Username = null;
  //  }
  

  // currentTime():any{
  //   // let date =Date.now();
  //   // return date;
  //   const date = new Date();
  //   return date;
  // }
  // data={
  //   name: 'monika',
  //   lname: 'thorat'

  // }
  // imageUrl = 'https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg';
  // constructor(){
  //   this.getEmpCountFromServer();
  // }
  // getEmpCountFromServer(){
  //   this.empCount = 100000;
  // }
  
  

