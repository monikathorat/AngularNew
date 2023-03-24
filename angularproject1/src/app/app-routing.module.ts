import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { DetailfashionComponent } from './fashion/detailfashion/detailfashion.component';
import { FashioncatComponent } from './fashion/fashioncat/fashioncat.component';

import { HomeComponent } from './home/home.component';
import { DecorComponent } from './homesupplies/decor/decor.component';
import { FurnitureComponent } from './homesupplies/furniture/furniture.component';
import { HomesuppliesComponent } from './homesupplies/homesupplies.component';
import { LightingsComponent } from './homesupplies/lightings/lightings.component';
import { PaintingsComponent } from './homesupplies/paintings/paintings.component';
import { HooksComponent } from './hooks/hooks.component';
import { LoginformComponent } from './loginform/loginform.component';
import { OrderlistComponent } from './orders/orderlist/orderlist.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CameraComponent } from './product/camera/camera.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { WatchComponent } from './product/watch/watch.component';
import { RegistrationTemplateFormComponent } from './registration-template-form/registration-template-form.component';
import { ResolveGuard } from './resolve.guard';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TodoComponent } from './todo/todo.component';
import { UnsavedchangesGuard } from './unsavedchanges.guard';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { WikiresultComponent } from './wikipedia-assign/wikiresult/wikiresult.component';


const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full'}, // http:localhost:4200 
  { path: 'home', component: HomeComponent},
  { path: 'aboutus', component: AboutusComponent }, // http://localhost:4200/aboutus
  { path: 'wikipedia', component: WikiresultComponent }, // http://localhost:4200/aboutus

  { path: 'contactus', component: ContactusComponent },
  { path: 'product', canActivate:[AuthGuard],  component:ProductComponent , 
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
{path:'post',component:DemopostComponent},
{path:'postdetails/:id',component:DemopostdetailsComponent},
{path:'user',component:UserComponent},
{ path: 'userdetails', component: UserdetailsComponent, resolve: {
  data: ResolveGuard
}},
{path:'userdetails',component:UserdetailsComponent},
{path:'userdetails/:id',component:UserdetailsComponent},
//{ path: 'login', component: RegistrationTemplateFormComponent},
//{ path: 'login', component: LoginformComponent},
{ path: 'login', component: LoginformComponent,canDeactivate: [UnsavedchangesGuard]},
{path:'order', component:OrderlistComponent}, 
{path:'rxjs', component:RxjsComponent}, 

{ path: 'fashionn', component: FashioncatComponent },
{ path: 'adduser', component: AdduserComponent, canDeactivate: [UnsavedchangesGuard]},
//{ path: 'adduser', component: AdduserComponent},

{ path: 'hook', component: HooksComponent },
{ path: 'detailfashion/:id', component: DetailfashionComponent }, 
{ path: 'customer', loadChildren:'./customer/customer.module#CustomerModule'},
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule'},
  {path:'todo',component:TodoComponent}, 
{ path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
