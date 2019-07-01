import { Injectable } from '@angular/core';
import { UsuarioModel } from './../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrudUsuariosService {

  private url = 'https://auth-login-basketapk.firebaseio.com';
  private usuario = '/Torneos/Usuario';

  constructor(private http: HttpClient) { }


  /************** Crear arreglo de objetos **************/
  private crearArreglo( Obj: object ) {

    const arreglo: UsuarioModel[] = [];

    Object.keys( Obj ).forEach( key => {

      const objeto: UsuarioModel = arreglo[ key ];
      objeto.ID = key;
      arreglo.push( objeto );

    });

    if ( Obj === null ) { return []; }

    return arreglo;
  }

  /***************** Usuario *****************/

  crearUsuario(usuarios: UsuarioModel){
    return this.http.post(`${ this.url }${ this.usuario }.json`, usuarios)
    .pipe(
      map( (resp: any) => {
        usuarios.ID = resp.name;
        return usuarios;
      })
    );
  }

  actualizarUsuario(usuarios: UsuarioModel) {
    const usuariosTem = {
      ...usuarios
    };

    delete usuariosTem.ID;

    return this.http.put(`${ this.url }${ this.usuario }${ usuarios.ID }.json`, usuariosTem);
  }

  consultarUsuario(usuarios: UsuarioModel) {
    return this.http.get(`${this.url}${this.usuario}.json`)
    .pipe(
      map( this.crearArreglo )
    );
  }

  eliminarUsuario(usuario: UsuarioModel) {

  }
}
