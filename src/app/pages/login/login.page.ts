import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login: FormGroup;
  correo: string;
  password: string;

  constructor(private rutas: Router) {

    this.login = new  FormGroup({
      'EmailLogin': new FormControl ('', [Validators.required, Validators.email]),
      'PwLogin': new FormControl ('', [Validators.required, Validators.minLength(8)])
    });

  }


loginInput(correo: string, password: string) {
  this.correo = correo;
  this.password = password;
  if (this.correo === 'aol@aol.com' && this.password === '12345678') {
    this.rutas.navigateByUrl('/admin');
    this.guardarStorage();
  }
  this.login.reset({
    EmailLogin: '',
    PwLogin: ''
  });
}

guardarStorage() {
  localStorage.setItem('correo', this.correo);
  localStorage.setItem('password', this.password);
}

  ngOnInit() {
  }

}
