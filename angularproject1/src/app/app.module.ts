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
import { HttpClientModule } from '@angular/common/http';
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
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { WatchComponent } from './product/watch/watch.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { CameraComponent } from './product/camera/camera.component';
import { HomesuppliesComponent } from './homesupplies/homesupplies.component';
import { FurnitureComponent } from './homesupplies/furniture/furniture.component';
import { PaintingsComponent } from './homesupplies/paintings/paintings.component';
import { LightingsComponent } from './homesupplies/lightings/lightings.component';
import { DecorComponent } from './homesupplies/decor/decor.component';
import { DemopostComponent } from './demopost/demopost.component';






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
    ProductComponent,
    LaptopComponent,
    WatchComponent,
    MobileComponent,
    CameraComponent,
    HomesuppliesComponent,
    FurnitureComponent,
    PaintingsComponent,
    LightingsComponent,
    DecorComponent,
    DemopostComponent,
   
   
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
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
