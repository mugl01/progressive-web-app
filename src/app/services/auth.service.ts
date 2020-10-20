import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usermodel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiKey = 'AIzaSyBHwEb7ntrMHMvqYj26gHShlNP5wM-RA8o';

  constructor(
    private http: HttpClient
  ) { }

  logOut() {

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
    );

  }

}
