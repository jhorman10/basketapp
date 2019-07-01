import { CrudTorneoNuevoService } from './crud-torneo-nuevo.service';
import { TorneoNuevoModel } from './../models/torneoNuevo.comdel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TorneoModel } from '../models/torneo.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudTorneosService {

  CRUD: CrudTorneoNuevoService;

  TN: TorneoNuevoModel = new TorneoNuevoModel;
  NTN: any = JSON.stringify(this.TN.ID);

  ntn = this.CRUD.consultarTorneoNuevo();

  private url = 'https://auth-login-basketapk.firebaseio.com';
  private torneo = `/Torneos/${this.NTN}/Torneo`;


  constructor(private http: HttpClient) { }

   /************** Crear arreglo de objetos **************/
   private crearArreglo( torneosObj: object ) {

    const arreglo: TorneoModel[] = [];

    Object.keys( torneosObj ).forEach( key => {

      const objeto: TorneoModel = arreglo[ key ];
      objeto.ID = key;
      arreglo.push( objeto );

    });

    if ( torneosObj === null ) { return []; }

    return arreglo;
  }

   /***************** Torneos *****************/
  crearTorneo( torneo: TorneoModel ) {
    return this.http.post(`${ this.url }${ this.torneo }.json`, torneo)
    .pipe(
      map( (resp: any) => {
        torneo.ID = resp.name;
        return torneo;
      })
    );
  }

  actualizarTorneo( torneo: TorneoModel ) {

    const torneoTem = {
      ...torneo
    };

    delete torneoTem.ID;

    return this.http.put(`${ this.url }${this.torneo}${ torneo.ID }.json`, torneoTem);
  }

  consultarTorneo() {
    return this.http.get(`${this.url}${this.torneo}.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  eliminarTorneo() {

  }

}
