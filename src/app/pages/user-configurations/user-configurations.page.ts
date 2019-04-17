import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-configurations',
  templateUrl: './user-configurations.page.html',
  styleUrls: ['./user-configurations.page.scss'],
})
export class UserConfigurationsPage implements OnInit {

  constructor(private rutas: Router, public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async cerrarSesion() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar Sesión!',
      message: '¿Está seguro de querer cerrar la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            localStorage.clear();
            this.rutas.navigateByUrl('/login');
          }
        }
      ]
    });

    await alert.present();
  }
}
