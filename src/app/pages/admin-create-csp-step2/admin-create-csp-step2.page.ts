import { Router } from '@angular/router';
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

  gruposT: GrupoModel;

  constructor(public alertCtrl: AlertController,
              private router: Router) { }

  ngOnInit() {
    this.gruposT = new GrupoModel();
  }

  crearGrupos(form: NgForm) {
    
    if (form.invalid) { return; }

  }

}
