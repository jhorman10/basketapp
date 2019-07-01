import { TorneoNuevoModel } from './../models/torneoNuevo.comdel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TeamModel } from '../models/team.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudEquiposService {


  private url = 'https://auth-login-basketapk.firebaseio.com';
  private team = `/Torneos/Team`;



  constructor(private http: HttpClient) { }

   /************** Crear arreglo de objetos **************/
   private crearArreglo( Obj: object ) {

    const arreglo: TeamModel[] = [];

    Object.keys( Obj ).forEach( key => {

      const objeto: TeamModel = arreglo[ key ];
      objeto.ID = key;
      arreglo.push( objeto );

    });

    if ( Obj === null ) { return []; }

    return arreglo;
  }

  /********** Equipos ************/
  crearEquipos(equipo: TeamModel) {
    return this.http.post(`${ this.url }${ this.team }.json`, equipo)
    .pipe(
      map( (resp: any) => {
        equipo.ID = resp.name;
        return equipo;
      })
    );
  }

  actualizaEquiposr(equipo: TeamModel) {

    const teamTem = {
      ...equipo
    };

    delete teamTem.ID;

    return this.http.put(`${ this.url }${ this.team }${ equipo.ID }.json`, teamTem);
  }

  consultarEquipos(equipo: TeamModel) {
    return this.http.get(`${this.url}${this.team}.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  eliminarEquipos(equipo: TeamModel) {

  }

}
