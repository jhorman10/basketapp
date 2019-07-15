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
              private router: Router) { }

 ngOnInit() {
    this.torneo = new TorneoModel();
  }

  crearTorneo(form: NgForm) {
    if (form.invalid) { return; }

  }

}
