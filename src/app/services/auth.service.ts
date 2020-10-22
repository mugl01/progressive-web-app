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
  token: 'token';
  expiresTime: 'expiresTime';

  constructor(
    private http: HttpClient
  ) {
    this.getToken();
  }

  logOut() {
    localStorage.removeItem(this.token);
  }

  logIn(user: Usermodel) {

    const authData = {
      ...user,
      returnSecureToken: true
    };

    return this.http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.apiKey}`,
      authData
    ).pipe(
      map(resp => {
        this.setToken(resp['idToken']);
        return resp;
      })
    );

  }

  private setToken(idToken: string) {
    const secondsInAnHour = 3600;
    this.userToken = idToken;
    localStorage.setItem(this.token, idToken);

    const today = new Date();
    today.setSeconds(secondsInAnHour);

    localStorage.setItem(this.expiresTime, today.getTime().toString());
  }

  private getToken() {
    this.userToken = localStorage.getItem(this.token) || '';
    return this.userToken;
  }

  isAuthenticated(): boolean {
    if (!this.userToken.length) {
      return false;
    }

    const expiresInMilliseconds = Number(localStorage.getItem(this.expiresTime));
    const expiresDate = new Date();
    expiresDate.setTime(expiresInMilliseconds);

    return expiresDate > new Date();

  }

}
