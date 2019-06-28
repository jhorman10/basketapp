import { AuthService } from './../../service/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-user-forgot-pw',
  templateUrl: './user-forgot-pw.page.html',
  styleUrls: ['./user-forgot-pw.page.scss'],
})
export class UserForgotPwPage implements OnInit {

  usuario = new UsuarioModel();

  constructor(private router: Router, private alCtrl: AlertController, private auth: AuthService) {

   }

  ngOnInit() {
  }

  userFogtot(form: NgForm) {

    if (form.invalid) {
      return;
    } else {
      this.auth.recuperarContra(this.usuario).then(function(){
        const alert = this.alCtrl.create({
          message: 'Hemos enviado un correo para la recuperación de la contraseña',
          buttons: ['Confirmar']
        });
      });
    }

    this.router.navigateByUrl('/login');
  }

}
