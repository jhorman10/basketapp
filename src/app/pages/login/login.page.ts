import { AuthService } from './../../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: UsuarioModel;


  constructor(private auth: AuthService,
              private router: Router) {

  }


  login(form: NgForm) {

    if (form.invalid) { return; }

  }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

}
