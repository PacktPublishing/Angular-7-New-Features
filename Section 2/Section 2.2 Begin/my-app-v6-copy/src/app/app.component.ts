import { Component } from '@angular/core';

export type FormType = 'templateDriven' | 'reactive' | 'employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 6 Forms';

  form: FormType = 'employees';

  get showTemplateDriven() {
    return this.form === 'templateDriven';
  }

  get showReactive() {
    return this.form === 'reactive';
  }

  get showEmployees() {
    return this.form === 'employees';
  }

  toggleForm(type: FormType) {
    this.form = type;
  }
}