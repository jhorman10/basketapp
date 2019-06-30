import { CrudTorneosService } from './../../service/crud-torneos.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TorneoModel } from './../../models/torneo.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-admin-create-csp-step1',
  templateUrl: './admin-create-csp-step1.page.html',
  styleUrls: ['./admin-create-csp-step1.page.scss'],
})
export class AdminCreateCSPStep1Page implements OnInit {

  torneo: TorneoModel;

  constructor(public alertCtrl: AlertController,
              private CRUD: CrudTorneosService,
              private router: Router) { }


  crearTorneo(form: NgForm) {
    if (form.invalid) { return; }

    this.CRUD.crearTorneo(this.torneo)
            .subscribe(resp => {
              console.log(resp);
            });

    this.router.navigateByUrl('/admin-create-csp-step2');
  }

  ngOnInit() {
    this.torneo = new TorneoModel();
  }

}
