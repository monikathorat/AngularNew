import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

   // userName = new BehaviorSubject<any>('Codemind1122');
  userName = new Subject<any>(); // observable
  
  data = new Subject<any>();
  name = new Subject<any>();
  contact = new Subject<any>();

 

  constructor() { }
}
