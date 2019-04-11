import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-csp-step3',
  templateUrl: './admin-create-csp-step3.page.html',
  styleUrls: ['./admin-create-csp-step3.page.scss'],
})
export class AdminCreateCSPStep3Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  deleteCSP() {
    console.log('Torneo Eliminado');
  }

}
