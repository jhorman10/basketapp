import { Router } from '@angular/router';
import { UsuarioModel } from './../../model/UsuarioModel';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})

export class UserRegisterPage implements OnInit {

  register: FormGroup;
  usuario = new UsuarioModel();

  constructor( private auth: AuthService,
               private router: Router) {

    this.register = new FormGroup({
      'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      'cedula': new FormControl( '', [Validators.required, Validators.minLength(6)] ),
      'correo': new FormControl( '', [Validators.required, Validators.email] ),
      'correo2': new FormControl( '', [Validators.required, Validators.email] ),
      'password': new FormControl( '', [Validators.required, Validators.minLength(8)] ),
      'password2': new FormControl( '', [Validators.required, Validators.minLength(8)] )
    });

    this.register.controls['correo2'].setValidators([
      Validators.required,
      this.EmailNotEquals.bind(this.register)
    ]);

    this.register.controls['password2'].setValidators([
      Validators.required,
      this.PwNotEquals.bind(this.register)
    ]);

  }

  PwNotEquals(control: FormControl): { [s: string]: boolean } {

    const register: any = this;

    if (control.value !== register.controls['password'].value) {
      return{
        PwNotEquals: true
      };
    }
    return null;
  }

  EmailNotEquals(control: FormControl): { [s: string]: boolean } {

    const register: any = this;

    if (control.value !== register.controls['correo'].value) {
      return{
        PwNotEquals: true
      };
    }
    return null;
  }

  userRegister() {
    // console.log(this.register.value);
    // console.log(this.usuario);
    // console.log(this.usuario);
    this.auth.logup(this.usuario)
              .subscribe(resp => {
                console.log(resp);
              });
    this.register.reset({
      nombre: '',
      cedula: '',
      correo: '',
      correo2: '',
      pw: '',
      pw2: ''
    });
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
    this.usuario = this.register.value;
  }

}

