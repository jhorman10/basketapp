import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})

export class UserRegisterPage implements OnInit {

  register: FormGroup;

  constructor() {

    this.register = new FormGroup({
      'nombre': new FormControl( '', [Validators.required, Validators.minLength(3)] ),
      'cedula': new FormControl( '', [Validators.required, Validators.minLength(6)] ),
      'correo': new FormControl( '', [Validators.required, Validators.email] ),
      'correo2': new FormControl( '', [Validators.required, Validators.email] ),
      'pw': new FormControl( '', [Validators.required, Validators.minLength(8)] ),
      'pw2': new FormControl( '', [Validators.required, Validators.minLength(8)] )
    });

    this.register.controls['correo2'].setValidators([
      Validators.required,
      this.EmailNotEquals.bind(this.register)
    ])

    this.register.controls['pw2'].setValidators([
      Validators.required,
      this.PwNotEquals.bind(this.register)
    ])

  }

  PwNotEquals(control:FormControl): { [s:string]:boolean } {

    let register:any=this;

    if(control.value !== register.controls['pw'].value){
      return{
        PwNotEquals:true
      }
    }
    return null;
  }

  EmailNotEquals(control:FormControl): { [s:string]:boolean } {

    let register:any=this;

    if(control.value !== register.controls['correo'].value){
      return{
        PwNotEquals:true
      }
    }
    return null;
  }

  userRegister() {
    console.log(this.register.value);
    this.register.reset({
      nombre: "",
      cedula: "",
      correo: "",
      correo2: "",
      pw: "",
      pw2: ""
    });
  }

  ngOnInit() {
  }

}

