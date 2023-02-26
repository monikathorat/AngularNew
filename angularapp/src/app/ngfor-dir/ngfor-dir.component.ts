import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-dir',
  templateUrl: './ngfor-dir.component.html',
  styleUrls: ['./ngfor-dir.component.css']
})
export class NgforDirComponent implements OnInit {

  
  countryList: Array<any> = [
    { country: 'India', states: ['Maharashtra', 'Meghalaya', 'Goa','Gujarat'] },
    { country: 'Italy', states: ['Venice','Milan','Florence'] }
  ];
  states: Array<any>;
  changeCountry(count) {
    this.states = this.countryList.find(con => con.country == count).states;
  }
  constructor() { }
  
  ngOnInit() {
  }

}
