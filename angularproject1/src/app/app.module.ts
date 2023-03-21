import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSliderModule} from '@angular/material/slider';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFromAssignComponent } from './reactive-from-assign/reactive-from-assign.component';
import { RegistrationTemplateFormComponent } from './registration-template-form/registration-template-form.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { CustomPipe } from './custom.pipe';
import { SearchPipe } from './search.pipe';
import { ProductFilterComponent } from './product-filter/product-filter.component';
import { UserserviceComponent } from './userservice/userservice.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';
import { Cmp1Component } from './cmp1/cmp1.component';
import { Cmp2Component } from './cmp2/cmp2.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { HomesuppliesComponent } from './homesupplies/homesupplies.component';
import { FurnitureComponent } from './homesupplies/furniture/furniture.component';
import { PaintingsComponent } from './homesupplies/paintings/paintings.component';
import { LightingsComponent } from './homesupplies/lightings/lightings.component';
import { DecorComponent } from './homesupplies/decor/decor.component';
import { DemopostComponent } from './demopost/demopost.component';
import { DemopostdetailsComponent } from './demopostdetails/demopostdetails.component';
import { UserComponent } from './user/user.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductModule } from './product/product.module';
import { OrdersModule } from './orders/orders.module';
import { FashionModule } from './fashion/fashion.module';
import { TodoComponent } from './todo/todo.component';
import { LoginformComponent } from './loginform/loginform.component';
import { MyserviceService } from './service/myservice.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { WikisearchComponent } from './wikipedia-assign/wikisearch/wikisearch.component';
import { WikipageComponent } from './wikipedia-assign/wikipage/wikipage.component';
import { WikiresultComponent } from './wikipedia-assign/wikiresult/wikiresult.component';
import { WikiModule } from './wikipedia-assign/wiki.module';
import { HooksComponent } from './hooks/hooks.component';






@NgModule({
  declarations: [
    AppComponent,
    ReactiveformComponent,
    ReactiveFromAssignComponent,
    RegistrationTemplateFormComponent,
    PipeexampleComponent,
    CustomPipe,
    SearchPipe,
    ProductFilterComponent,
    UserserviceComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component,
    Cmp1Component,
    Cmp2Component,
    ContactusComponent,
    AboutusComponent,
    HomeComponent,
    PagenotfoundComponent,
   
    HomesuppliesComponent,
    FurnitureComponent,
    PaintingsComponent,
    LightingsComponent,
    DecorComponent,
    DemopostComponent,
    DemopostdetailsComponent,
    UserComponent,
    UserdetailsComponent,
    TodoComponent,
    LoginformComponent,
    WikisearchComponent,
    WikipageComponent,
    WikiresultComponent,
    HooksComponent,
  

   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    HttpClientModule, 
    ProductModule,
    OrdersModule,
    FashionModule,
    WikiModule

    

  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }, MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('AppModule Called');
  }
}
