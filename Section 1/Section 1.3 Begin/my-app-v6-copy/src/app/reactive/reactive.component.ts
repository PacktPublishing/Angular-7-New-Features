import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})

export class ReactiveComponent {

  user = {
    username: "ChristianHur",
    password: "password123",
    email: "chur@mycompany.com"
  };

  usernameControl = new FormControl(this.user.username, Validators.required);
  passwordControl = new FormControl(this.user.password, Validators.required);
  emailControl = new FormControl(this.user.email, Validators.required);

  reactiveForm = new FormGroup({
    username: this.usernameControl,
    password: this.passwordControl,
    email: this.emailControl
  })

  submit() {
    console.log(this.reactiveForm.value);
  }

  reset() {
     this.reactiveForm.get("username").setValue("ChristianHur");
     this.reactiveForm.get("password").setValue("password123");
     this.reactiveForm.get("email").setValue("chur@mycompany.com");
  }

}