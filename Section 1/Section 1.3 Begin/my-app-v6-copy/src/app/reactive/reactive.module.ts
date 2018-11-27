import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import {ReactiveComponent} from './reactive.component';

@NgModule({
    imports: [FormsModule,ReactiveFormsModule],
    declarations: [ ReactiveComponent],
    exports: [ ReactiveComponent],
})

export class ReactiveModule { }