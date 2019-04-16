import { RouterModule, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-delete-csp',
  templateUrl: './admin-delete-csp.page.html',
  styleUrls: ['./admin-delete-csp.page.scss'],
})
export class AdminDeleteCSPPage implements OnInit {

  constructor(public actionSheetCtrl:ActionSheetController, public router: Router,
              public alertCtrl:AlertController) { }


  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Gestionar',
      buttons: [{
        text: 'Eliminar',
        role: 'destructive',
        cssClass: 'rojo',
        icon: 'trash',
        handler: () => {
          this.presentAlert();
        }
      }, {
        text: 'Modificar Grupos',
        icon: 'contacts',
        handler: () => {
          this.router.navigateByUrl("/admin-create-csp-step2");
        }
      }, {
        text: 'Modificar Modo del Fixture',
        icon: 'calendar',
        handler: () => {
          this.router.navigateByUrl("/admin-create-fixture-step1");
        }
      }, {
        text: 'Modificar Genero',
        icon: 'contacts',
        handler: () => {
          this.router.navigateByUrl("/admin-create-csp-step1");
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: '¿Está seguro de eliminar el torneo?',
      subHeader: 'El torneo se archivará',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },{
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }


  delTorneo() {
    console.log('El torneo ha sido eliminado.');
  }
}
