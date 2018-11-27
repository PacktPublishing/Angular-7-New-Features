import { NgModule } from '@angular/core';

import {TemplateDrivenModule} from '../templateDriven/templateDriven.module';
import {ReactiveModule} from '../reactive/reactive.module';
import { EmployeesModule } from '../employees/employees.module';

@NgModule({
    imports: [ TemplateDrivenModule,ReactiveModule,EmployeesModule],
    exports: [ TemplateDrivenModule,ReactiveModule,EmployeesModule]
})

export class NgFormsModule { }