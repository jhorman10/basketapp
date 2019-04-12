import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-csp-step2',
  templateUrl: './admin-create-csp-step2.page.html',
  styleUrls: ['./admin-create-csp-step2.page.scss'],
})
export class AdminCreateCSPStep2Page implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Número de grupos',
      inputs: [
        {
          name: 'numero_grupos',
          type: 'number'
        }
      ],
      buttons: ['Cancelar', 'OK']
    });

    await alert.present();
  }

}
