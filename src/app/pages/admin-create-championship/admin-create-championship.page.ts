import { CrudTorneoNuevoService } from './../../service/crud-torneo-nuevo.service';
import { Router } from '@angular/router';
import { TorneoNuevoModel } from './../../models/torneoNuevo.comdel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-championship',
  templateUrl: './admin-create-championship.page.html',
  styleUrls: ['./admin-create-championship.page.scss'],
})
export class AdminCreateChampionshipPage implements OnInit {

  TorneoNuevo: TorneoNuevoModel;

  constructor(private CRUD: CrudTorneoNuevoService,
              private router: Router) { }

  ngOnInit() {
    this.TorneoNuevo = new TorneoNuevoModel();
  }

  crearTorneoNuevo() {
    this.CRUD.crearTorneoNuevo(this.TorneoNuevo)
    .subscribe(resp => {
      console.log(resp);
      this.TorneoNuevo = resp;
    });
    this.router.navigateByUrl('/admin-create-csp-step1');
  }

}
