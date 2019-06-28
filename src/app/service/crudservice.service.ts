import { UsuarioModel } from './../models/usuario.model';
import { TeamModel } from './../models/team.model';
import { GrupoModel } from './../models/grupo.model';
import { TorneoModel } from './../models/torneo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CRUDserviceService {

  private url = 'https://auth-login-basketapk.firebaseio.com';
  private torneo = '/Torneo/12345/Torneo';
  private grupo = '/Torneo/12345/Grupos';
  private team = '/Torneo/12345/Team';
  private usuario = '/Torneo/12345/Usuario';

  constructor(private http: HttpClient) { }

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

    return this.http.put(`${ this.url }${this.torneo}${ torneo.ID }.json`, torneo);
  }

  consultarTorneo() {

  }

  eliminarTorneo() {

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

    return this.http.put(`${ this.url }${this.grupo}${ grupo.ID }.json`, grupo);
  }

  consultarGrupos(grupo: GrupoModel) {

  }

  eliminarGrupos(grupo: GrupoModel) {

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

    return this.http.put(`${ this.url }${ this.team }${ equipo.ID }.json`, equipo);
  }

  consultarEquipos(equipo: TeamModel) {

  }

  eliminarEquipos(equipo: TeamModel) {

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

    return this.http.put(`${ this.url }${ this.usuario }${ usuarios.ID }.json`, usuarios);
  }

  consultarUsuario(usuarios: UsuarioModel) {

  }

  eliminarUsuario(usuario: UsuarioModel) {

  }

}
