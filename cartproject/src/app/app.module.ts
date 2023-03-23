import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartloginComponent } from './cartlogin/cartlogin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarthomeComponent } from './carthome/carthome.component';
import { HttpClientModule } from '@angular/common/http';
import { CartsignupComponent } from './cartsignup/cartsignup.component';
//import { CartproductsComponent } from './cartproducts/cartproducts.component';

@NgModule({
  declarations: [
    AppComponent,
    CartloginComponent,
    CarthomeComponent,
    CartsignupComponent,
    //CartproductsComponent,
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
