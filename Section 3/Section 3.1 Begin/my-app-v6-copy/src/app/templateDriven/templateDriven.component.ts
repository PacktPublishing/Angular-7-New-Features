import { Component } from '@angular/core';

@Component({
  selector: 'template-driven',
  templateUrl: './templateDriven.component.html',
  styleUrls: ['./templateDriven.component.css']
})
export class TemplateDrivenComponent {

  user = {  username:"ChristianHur", 
            password: "password123", 
            email:"chur@mycompany.com"}

  submit(value: any) { 
    console.log(value); 
  }

  reset(value: any){
    this.user.username = "ChristianHur";
    this.user.password = "password123";
    this.user.email = "chur@mycompany.com";
    console.log(value); 
  }
}