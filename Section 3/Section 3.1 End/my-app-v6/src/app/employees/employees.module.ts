import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
@NgModule({
  imports: [
    CommonModule,DragDropModule
  ],
  declarations: [EmployeesComponent],
  exports: [EmployeesComponent]
})
export class EmployeesModule { }
