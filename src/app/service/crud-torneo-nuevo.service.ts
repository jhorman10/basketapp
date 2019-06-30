import { Injectable } from '@angular/core';
import { TorneoNuevoModel } from './../models/torneoNuevo.comdel';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudTorneoNuevoService {

  private url = 'https://auth-login-basketapk.firebaseio.com';
  private torneoNuevo = '/Torneo/nodo';
  private torneo = '/Torneo/nodo/Torneo';

  constructor(private http: HttpClient) { }


  /************** Crear arreglo de objetos **************/
  private crearArreglo( Obj: object ) {

    const arreglo: TorneoNuevoModel[] = [];

    Object.keys( Obj ).forEach( key => {

      const objeto: TorneoNuevoModel = arreglo[ key ];
      objeto.ID = key;
      arreglo.push( objeto );

    });

    if ( Obj === null ) { return []; }

    return arreglo;
  }

  /************** Torneo nuevo **************/
  crearTorneoNuevo( torneoNuevo: TorneoNuevoModel ) {

    return this.http.post(`${ this.url }${ this.torneoNuevo }.json`, torneoNuevo)
    .pipe(
      map( (resp: any) => {
        torneoNuevo.ID = resp.name;
        return torneoNuevo;
      })
    );
  }

  actualizarTorneoNuevo( torneoNuevo: TorneoNuevoModel ) {

    const torneoNuevoTem = {
      ...torneoNuevo
    };

    delete torneoNuevoTem.ID;

    return this.http.put(`${ this.url }${this.torneo}${ torneoNuevo.ID }.json`, torneoNuevoTem);
  }

  consultarTorneoNuevo() {
    return this.http.get(`${this.url}${this.torneoNuevo}.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  eliminarTorneoNuevo() {

  }

}


