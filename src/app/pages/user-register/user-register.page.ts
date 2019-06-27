import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgForm } from '@angular/forms';

import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from './../../service/auth.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})

export class UserRegisterPage implements OnInit {

  usuario: UsuarioModel;

  constructor( private auth: AuthService,
               private router: Router) { }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  userRegister( form: NgForm) {
    if (form.invalid) { return; }

    this.auth.logup( this.usuario )
      .subscribe( resp => {
        console.log(resp);
        this.router.navigateByUrl('/user');
      }, (err) => {
        console.log(err.error.error.message);
        this.router.navigateByUrl('/login');
      });
  }

}

