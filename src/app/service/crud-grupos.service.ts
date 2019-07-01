import { TorneoNuevoModel } from './../models/torneoNuevo.comdel';
import { HttpClient } from '@angular/common/http';
import { GrupoModel } from './../models/grupo.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CrudGruposService {
  private url = 'https://auth-login-basketapk.firebaseio.com';
  private grupo = `/Torneos/Grupos`;


  constructor(private http: HttpClient) { }

    /************** Crear arreglo de objetos **************/
    private crearArreglo( Obj: object ) {

      const arreglo: GrupoModel[] = [];

      Object.keys( Obj ).forEach( key => {

        const objeto: GrupoModel = arreglo[ key ];
        objeto.ID = key;
        arreglo.push( objeto );

      });

      if ( Obj === null ) { return []; }

      return arreglo;
    }

  /**************Grupos *************/
  crearGrupo(grupo: GrupoModel) {
    return this.http.post(`${ this.url }${ this.grupo }.json`, grupo)
    .pipe(
      map( (resp: any) => {
        grupo.ID = resp.name;
        return grupo;
      })
    );
  }

  actualizarGrupos(grupo: GrupoModel) {

    const gruposTem = {
      ...grupo
    };

    delete gruposTem.ID;

    return this.http.put(`${ this.url }${this.grupo}${ grupo.ID }.json`, gruposTem);
  }

  consultarGrupos(grupo: GrupoModel) {
    return this.http.get(`${this.url}${this.grupo}.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  eliminarGrupos(grupo: GrupoModel) {

  }
}
