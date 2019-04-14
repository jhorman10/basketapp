import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage implements OnInit {
  registro: FormGroup;
  constructor() { }
  saveData(){
    console.log(this.registro.value);
  }
  
  ngOnInit() {
  }

}
