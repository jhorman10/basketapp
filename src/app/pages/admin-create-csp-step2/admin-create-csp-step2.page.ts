import { Router } from '@angular/router';
import { CRUDserviceService } from './../../service/crudservice.service';
import { NgForm } from '@angular/forms';
import { GrupoModel } from './../../models/grupo.model';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-csp-step2',
  templateUrl: './admin-create-csp-step2.page.html',
  styleUrls: ['./admin-create-csp-step2.page.scss'],
})
export class AdminCreateCSPStep2Page implements OnInit {

  grupos: GrupoModel;

  constructor(public alertCtrl: AlertController,
              private CRUD: CRUDserviceService,
              private router: Router) { }

  ngOnInit() {
    this.grupos = new GrupoModel();
  }

  // async presentAlert() {
  //   const alert = await this.alertCtrl.create({
  //     header: 'Número de grupos',
  //     inputs: [
  //       {
  //         name: 'numero_grupos',
  //         type: 'number'
  //       }
  //     ],
  //     buttons: ['Cancelar', 'OK']
  //   });

  //   await alert.present();
  // }

  crearGrupos(form: NgForm) {
    if (form.invalid) { return; }

    if (this.grupos.ID) {

    this.CRUD.actualizarGrupos(this.grupos)
    .subscribe(resp => {
      console.log(resp);
    });

    } else {

      this.CRUD.crearGrupo(this.grupos)
      .subscribe(resp => {
        console.log(resp);
      });
    }

    this.router.navigateByUrl('/admin-create-csp-step3');
  }

}
