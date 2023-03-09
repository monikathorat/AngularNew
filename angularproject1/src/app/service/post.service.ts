import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  url1 = 'https://jsonplaceholder.typicode.com/users';
  // DI 
  constructor(private http: HttpClient) { }

  getPost(): Observable<any> {
  return this.http.get<Post>(this.url);
  }
  getPostById(id: number) {
   return this.http.get(this.url+ '/'+ id);
  }

  getUser():Observable<any>{
    return this.http.get<Post>(this.url1);
  }
  getUserById(id:number){
    return this.http.get(this.url1+'/'+id);
  }
}
