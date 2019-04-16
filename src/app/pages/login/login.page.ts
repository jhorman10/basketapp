import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;

  constructor() { 

    this.login = new  FormGroup({
      'EmailLogin': new FormControl ('', [Validators.required, Validators.email]),
      'PwLogin': new FormControl ('', [Validators.required, Validators.minLength(8)])

    });

  }


loginInput(){
  console.log(this.login.value);
  this.login.reset({
    EmailLogin: "",
    PwLogin: ""
  });
}

  ngOnInit() {
  }

}
