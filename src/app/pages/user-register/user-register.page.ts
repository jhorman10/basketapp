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
      'nombre': new FormControl({ '': [Validators.required, Validators.minLength(3)] }),
      'cedula': new FormControl({ '': [Validators.required, Validators.minLength(6)] }),
      'correo': new FormControl({ '': [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+/.[A-Za-z]{1,63}$")] }),
      'correo2': new FormControl({ '': [Validators.required, Validators.pattern("[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+/.[A-Za-z]{1,63}$")] }),
      'pw': new FormControl({ '': [Validators.required, Validators.minLength(8)] }),
      'pw2': new FormControl({ '': [Validators.required, Validators.minLength(8)] })
    })
  }

  saveData() {
    console.log(this.register.value)
  }

  ngOnInit() {
  }

}

