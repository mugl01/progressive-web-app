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
  storageKeys = {
    token: 'token',
    expiresTime: 'expiresTime'
  }
  token: 'token';
  expiresTime: 'expiresTime';

  constructor(
    private http: HttpClient
  ) {
    this.getToken();
  }

  logOut() {
    localStorage.removeItem(this.storageKeys.token);
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

  isAuthenticated(): boolean {
    if (!this.userToken.length) {
      return false;
    }

    const expiresInMilliseconds = Number(localStorage.getItem(this.storageKeys.expiresTime));
    const expiresDate = new Date();
    expiresDate.setTime(expiresInMilliseconds);

    return expiresDate > new Date();
  }

  private setToken(idToken: string) {
    const secondsInAnHour = 3600;
    this.userToken = idToken;
    localStorage.setItem(this.storageKeys.token, idToken);

    const today = new Date();
    today.setSeconds(secondsInAnHour);

    localStorage.setItem(this.storageKeys.expiresTime, today.getTime().toString());
  }

  private getToken() {
    this.userToken = localStorage.getItem(this.storageKeys.token) || '';
    return this.userToken;
  }

}
