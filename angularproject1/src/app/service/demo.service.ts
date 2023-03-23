import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  users : any;
  products = [
    {name : 'laptop', id : '1'},
    { name : 'mobile', id : '2'}
  ]
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }


  getUsers () {

   return this.httpClient.get(this.apiUrl);
  
   
  }
}
