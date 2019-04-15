import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-asign-locate',
  templateUrl: './admin-asign-locate.page.html',
  styleUrls: ['./admin-asign-locate.page.scss'],
})
export class AdminAsignLocatePage implements OnInit {

  constructor(public alertCtrl: AlertController) { }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Añadir Fecha y Lugar',
      inputs: [
        {
          name: 'Fecha',
          type: 'date'
        },
        {
          name: 'Lugar',
          placeholder: 'Lugar',
          type: 'text'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
