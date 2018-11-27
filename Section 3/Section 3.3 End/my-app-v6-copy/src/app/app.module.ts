import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgFormsModule } from './ngForms/ngForms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesService } from './employees.service';

@NgModule({
  declarations: [
    AppComponent],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgFormsModule, BrowserAnimationsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
