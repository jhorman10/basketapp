import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-admin-create-csp-step1',
  templateUrl: './admin-create-csp-step1.page.html',
  styleUrls: ['./admin-create-csp-step1.page.scss'],
})
export class AdminCreateCSPStep1Page implements OnInit {

  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

}
