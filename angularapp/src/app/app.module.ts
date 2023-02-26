import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { CardComponent } from './card/card.component';
import { PasswordComponent } from './password/password.component';
import { PropComponent } from './prop/prop.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { NgforDirComponent } from './ngfor-dir/ngfor-dir.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { PractngIfComponent } from './practng-if/practng-if.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclass/ngclass.component';
import { AssigndirectiveComponent } from './assigndirective/assigndirective.component';
import { PractComponent } from './pract/pract.component';
import { Pract1Component } from './pract1/pract1.component';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { TemplateformComponent } from './templateform/templateform.component';
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
import { TemppractformComponent } from './temppractform/temppractform.component';
import { TemplateFormAssignComponent } from './template-form-assign/template-form-assign.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { TemplateRegistrationFormComponent } from './template-registration-form/template-registration-form.component';
import { ReactiveAssignComponent } from './reactive-assign/reactive-assign.component';

@NgModule({
  declarations: [
    AppComponent,Test1Component, CardComponent, PasswordComponent, PropComponent, NgforComponent, NgforDirComponent, NgifComponent, NgswitchComponent, PractngIfComponent, NgstyleComponent, NgclassComponent, AssigndirectiveComponent, PractComponent, Pract1Component, CustomDirective, TemplateformComponent, TemppractformComponent, TemplateFormAssignComponent, ReactiveformComponent, TemplateRegistrationFormComponent, ReactiveAssignComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
