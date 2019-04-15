import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';



@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  registro: FormGroup;
  constructor(
  
    public formBuilder: FormBuilder
  )
   { 
    this.registro = this.createMyForm();
  }
  saveData(){
    console.log(this.registro.value);
  }
  private createMyForm(){
    return this.formBuilder.group({
      name: ['', Validators.required],
      cardid: ['', Validators.required],
      email: ['', Validators.required],
      email2: ['', Validators.required],
      passwordRetry: this.formBuilder.group({
        password: ['', Validators.required],
        passwordConfirmation: ['', Validators.required]
      }),
      password2: ['', Validators.required],

    });
  }
  ngOnInit() {
  }

}

