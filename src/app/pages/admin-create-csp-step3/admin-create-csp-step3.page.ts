import { TeamModel } from './../../models/team.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { CrudEquiposService } from 'src/app/service/crud-equipos.service';

@Component({
  selector: 'app-admin-create-csp-step3',
  templateUrl: './admin-create-csp-step3.page.html',
  styleUrls: ['./admin-create-csp-step3.page.scss'],
})
export class AdminCreateCSPStep3Page implements OnInit {

  Team: TeamModel;

  constructor(private CRUD: CrudEquiposService,
              private router: Router) {   }


  ngOnInit() {
    this.Team = new TeamModel();
  }

  crearTeam(form: NgForm) {

    if (form.invalid) { return; }

    if (this.Team.ID) {

    this.CRUD.actualizaEquiposr(this.Team)
    .subscribe(resp => {
      console.log(resp);
    });

    } else {

      this.CRUD.crearEquipos(this.Team)
      .subscribe(resp => {
        console.log(resp);
      });
    }

    this.router.navigateByUrl('/admin-create-csp-fs');

  }

}
