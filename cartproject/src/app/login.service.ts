import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { login } from './models/products';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  

//   private baseUrl = 'http://localhost:3000/users';

//   constructor(private http: HttpClient) { }

//    login(email: string, password: string): Observable<any> {
//     return this.http.get(`${this.baseUrl}/users?email=${email}&password=${password}`);
//    }
//   checkuser(email, password) {
//     if(email == 'monica@gmail.com' && password == 'Monica@123')
//     {
//       localStorage.setItem('email', 'monica');
//       return true;
//     } else {
//       return false;
//     }
// }
// }
// invalidUserAuth= new EventEmitter<boolean>(false);
// constructor(private http: HttpClient,private router:Router) { }

// userLogin(data:login){
//   this.http.get(`http://localhost:3000/users?email&password`,
//   {observe:'response'}
//   ).subscribe((result)=>{
//     if(result && result.body){
//       localStorage.setItem('user',JSON.stringify(result.body[0]));
//       this.router.navigate(['/home']);
//       this.invalidUserAuth.emit(false)
//     }else{
//       this.invalidUserAuth.emit(true)
//     }
//   })
// }
// userAuthReload(){
//   if(localStorage.getItem('user')){
//     this.router.navigate(['/home']);
//   }
// }

private apiUrl = 'http://localhost:3000/users';

constructor(private http: HttpClient) { }

login(email: string, password: string): Observable<any> {
  return this.http.get(`${this.apiUrl}?email=${email}&password=${password}`);
}

register(email: string, password: string): Observable<any> {
  const user = { email, password };
  return this.http.post(this.apiUrl, user);
}

}
