import { TorneoModel } from './../models/torneo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class CRUDserviceService {

  private url = 'https://auth-login-basketapk.firebaseio.com';

  constructor(private http: HttpClient) { }

  crearTorneo(torneo: TorneoModel) {
    return this.http.post(`${this.url}/Torneo/12345/Torneo.json`, torneo)
    .pipe(
      map( (resp: any) => {
        torneo.ID = resp.name;
        return torneo;
      })
    );
  }

}
