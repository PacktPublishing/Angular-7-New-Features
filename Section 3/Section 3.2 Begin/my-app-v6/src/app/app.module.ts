import { BrowserModule } from '@angular/platform-browser';
import { NgModule, DoBootstrap, ApplicationRef } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { NgFormsModule } from './ngForms/ngForms.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeesService } from './employees.service';
import { EmployeesComponent } from './employees/employees.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    DragdropComponent],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, NgFormsModule, BrowserAnimationsModule, DragDropModule
  ],
  providers: [EmployeesService],
  entryComponents: [AppComponent,EmployeesComponent]
  //bootstrap: [EmployeesComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef): void {
      const component = {"app-root":AppComponent,"employees-list":EmployeesComponent}
      let name = "" || "app-root";
      const el = document.createElement(name);
      name != "app-root" ? document.body.appendChild(el) :null;
      appRef.bootstrap(component[name])
    
  }

 }
