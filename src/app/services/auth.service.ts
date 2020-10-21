import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from '../models/user.model';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyBHwEb7ntrMHMvqYj26gHShlNP5wM-RA8o';

  userToken: string;

  constructor(
    private http: HttpClient
  ) { }

  logOut() {
    localStorage.removeItem('token');
  }

  logIn(user: Usermodel) {

    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
      ${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.setToken(resp['idToken']);
        return resp;
      })
    );

  }

  private setToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const today = new Date();
    today.setSeconds(3600);

    localStorage.setItem('expiresIn', today.getTime().toString());
  }

  private getToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  isAuthenticated(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expires = Number(localStorage.getItem('expiresIn'));
    const expiresDate = new Date();
    expiresDate.setTime(expires);

    if (expiresDate > new Date()) {
      return true;
    } else {
      return false;
    }

  }

}
