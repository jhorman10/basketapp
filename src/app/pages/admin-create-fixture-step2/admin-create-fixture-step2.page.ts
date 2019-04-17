import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-fixture-step2',
  templateUrl: './admin-create-fixture-step2.page.html',
  styleUrls: ['./admin-create-fixture-step2.page.scss'],
})
export class AdmincreateFixtureStep2Page implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async selManual() {
    const alert = await this.alertCtrl.create({
      header: 'Equipos!',
      message: 'Seleccione los equipos a enfrentar.',
      inputs: [
        {
          name: 'equipo1',
          type: 'text',
          value: 'Leones',
          placeholder: 'Equipo 1'
        },
        {
          name: 'equipo2',
          type: 'text',
          value: 'Ferro',
          placeholder: 'Equipo 2'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

}
