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

  correo: string;
  password: string;
  usuario: UsuarioModel = new UsuarioModel();


  constructor(private auth: AuthService,
              private router: Router) {

  }


login(form: NgForm) {

  if (this.usuario.email == 'basket@basket.com' && this.usuario.password == 'basket123') {
    this.router.navigateByUrl('/admin');
  } else {
      this.auth.login( this.usuario )
                .subscribe( resp => {

        console.log(resp);
        this.router.navigateByUrl('/user');
        this.guardarStorage();

      }, (err) => {
        console.log(err.error.error.message);
        });
  }
}


guardarStorage() {
  localStorage.setItem('correo', this.correo);
  localStorage.setItem('password', this.password);
}

  ngOnInit() {

  }

}
