import { Router } from '@angular/router';
import { TorneoModel } from './../../models/torneo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-csp-fs',
  templateUrl: './admin-create-csp-fs.page.html',
  styleUrls: ['./admin-create-csp-fs.page.scss'],
})
export class AdminCreateCspFsPage implements OnInit {

  Torneo: TorneoModel[] = [];

  constructor(
              private router: Router) { }

  ngOnInit() {
  }

  guardarTorneo() {
    console.log('Creado correctamente.');
  }

}
