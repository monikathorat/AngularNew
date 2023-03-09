import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { DecorComponent } from './homesupplies/decor/decor.component';
import { FurnitureComponent } from './homesupplies/furniture/furniture.component';
import { HomesuppliesComponent } from './homesupplies/homesupplies.component';
import { LightingsComponent } from './homesupplies/lightings/lightings.component';
import { PaintingsComponent } from './homesupplies/paintings/paintings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'contactus', component: ContactusComponent },
  { path: 'product', component:ProductComponent , 
children:[
  
  {path:'laptop', component:LaptopComponent},
  {path:'mobile', component:MobileComponent},
  {path:'camera', component:CameraComponent},
  {path:'watch', component:WatchComponent},
] },
//   { path: 'product', 
// children:[
//   {path:'', component:ProductComponent},
//   {path:'laptop', component:LaptopComponent},
//   {path:'mobile', component:MobileComponent},
//   {path:'camera', component:CameraComponent},
//   {path:'watch', component:WatchComponent},
// ] },
{path: 'homesupplies',
children:[
  {path:'', component:HomesuppliesComponent},
  {path:'furniture', component:FurnitureComponent},
  {path:'lightings', component:LightingsComponent},
  {path:'paintings', component:PaintingsComponent},
  {path:'decor', component:DecorComponent},
]},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
