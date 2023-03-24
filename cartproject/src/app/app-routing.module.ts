import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarthomeComponent } from './carthome/carthome.component';
import { CartloginComponent } from './cartlogin/cartlogin.component';
import { CartsignupComponent } from './cartsignup/cartsignup.component';
//import { CartproductsComponent } from './cartproducts/cartproducts.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: CartloginComponent },
  { path: 'home', component: CarthomeComponent },
  { path: 'signup', component: CartsignupComponent },
  //{ path: 'details/:productId', component: CartproductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
