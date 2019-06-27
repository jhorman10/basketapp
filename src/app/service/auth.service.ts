import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../model/UsuarioModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // crear usuario
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=[API_KEY]

  // login
  // https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[API_KEY]



  private URL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
  private APIkey = 'AIzaSyBdrK2N_o_0Hx2-ulVOM79ZBgiGQHdbtNE';

  constructor(private http: HttpClient) {  }

  login( usuario: UsuarioModel ) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(`${this.URL}/verifyPassword?key=${this.APIkey}`,
    authData);
  }


  logup(usuario: UsuarioModel) {

    const authData = {
      ...usuario,
      returnSecureToken: true
    };

    return this.http.post(
      `${this.URL}/signupNewUser?key=${this.APIkey}`,
      authData
    );
  }

  logout() {

  }

}
