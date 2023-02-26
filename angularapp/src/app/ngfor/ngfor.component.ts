import { Component, OnInit} from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title:string = 'Top 3 movies';
  movies: Movie[] = [
    {title:'3 idiots',director:'rajkumar',cast:'amir',releaseDate:'2009'},
    {title:'tumbad',director:'rahi',cast:'rahi',releaseDate:'2020'},
    {title:'kantara',director:'rishab',cast:'rishab',releaseDate:'2022'},

  ]
  constructor() { }

  ngOnInit() {
  }

}
