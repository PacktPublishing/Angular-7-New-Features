import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {TemplateDrivenComponent} from './templateDriven.component';

@NgModule({
    imports: [FormsModule],
    declarations: [ TemplateDrivenComponent],
    exports: [ TemplateDrivenComponent],
})

export class TemplateDrivenModule { }