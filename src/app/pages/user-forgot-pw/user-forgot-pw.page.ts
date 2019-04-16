import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-forgot-pw',
  templateUrl: './user-forgot-pw.page.html',
  styleUrls: ['./user-forgot-pw.page.scss'],
})
export class UserForgotPwPage implements OnInit {

  frmOlvidoContrasena: FormGroup;

  constructor() {
    this.frmOlvidoContrasena = new FormGroup({
      'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      'cedula': new FormControl( '', [Validators.required, Validators.minLength(6)] ),
      'correo': new FormControl( '', [Validators.required, Validators.email] ),
      'correo2': new FormControl( '', [Validators.required, Validators.email] ),
    });

    this.frmOlvidoContrasena.controls['correo'].setValidators([
      Validators.required,
      Validators.email,
      this.maildDontMatch.bind(this.frmOlvidoContrasena)
    ]);
   }

   maildDontMatch(control: FormControl): {[s: string]: boolean} {
     let frmOlvidoContrasena: any = this;
     if (control.value !== frmOlvidoContrasena.controls['correo'].value) {
       return {
         noesigual: true
       };
     }
     return null;
   }

   sdForgotPass() {
    console.log('Se envió su solicitud correctamente.');
    this.frmOlvidoContrasena.reset({
      nombre: '',
      cedula: '',
      correo: '',
      correo2: ''
    });
   }

  ngOnInit() {
  }

}
