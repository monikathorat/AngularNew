import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practng-if',
  templateUrl: './practng-if.component.html',
  styleUrls: ['./practng-if.component.css']
})
export class PractngIfComponent implements OnInit {

  cities = [
    {
      name:'Jodhpur',
      imgUrl:'https://www.jodhpursearch.com/wp-content/uploads/2021/03/Blue-City-of-India-Jodhpur-Rajasthan-India-.jpg',
      content:'Jodhpur - The Blue City'
    },
    {
      name:'Udaipur',
      imgUrl:'https://www.flamingotravels.co.in/blog/wp-content/uploads/2021/08/Udaipur_Tour_Packages.jpg',
      content:'Udaipur - The City of Lakes'
    },
    {
      name:'Jaipur',
      content:'Jaipur - The Pink City'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
