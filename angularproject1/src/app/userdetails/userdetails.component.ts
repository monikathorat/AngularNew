import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from '../service/demo.service';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  arr1:any  = [] ;
  users : any;

  // DI 
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    // let id = this.route.snapshot.params['id'];

    // this.postService.getUserById(id).subscribe( res => {
    //   console.log('get post by ID', res);
    //   this.arr1=res;        
    // });

    
    this.users = this.route.snapshot.data['data'];
     console.log('resolve data before route',this.users);
    

}
}
