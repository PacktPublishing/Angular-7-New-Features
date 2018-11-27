import { Component } from '@angular/core';

export type FormType = 'templateDriven' | 'reactive' | 'employees' | 'dragdrop' | 'virtualscroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 6 Forms';

  form: FormType = 'virtualscroll';

  get showTemplateDriven() {
    return this.form === 'templateDriven';
  }

  get showReactive() {
    return this.form === 'reactive';
  }

  get showEmployees() {
    return this.form === 'employees';
  }
  get showDragDrop() {
    return this.form === 'dragdrop';
  }
  get showVirtualScroll() {
    return this.form === 'virtualscroll';
  }
  toggleForm(type: FormType) {
    this.form = type;
  }
}