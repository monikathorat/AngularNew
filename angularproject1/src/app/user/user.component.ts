import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  arrUser: User[] = [] ;
  // DI pots service
  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getUser().subscribe(res => {
      this.arrUser = res;
      console.log('post arr data' , res);
    })
  }
}
