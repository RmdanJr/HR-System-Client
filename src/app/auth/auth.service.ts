import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { baseUrl } from '../app.constants';
import { AlertService } from '../shared/alert/alert.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public username: BehaviorSubject<string> = new BehaviorSubject(
    localStorage.getItem('username')!
  );
  public token: BehaviorSubject<string> = new BehaviorSubject(
    localStorage.getItem('token')!
  );

  constructor(
    private httpClient: HttpClient,
    private alertService: AlertService,
    private router: Router
  ) {}

  getToken(username: string, password: string) {
    return btoa(`${username}:${password}`);
  }

  login(loginFormValue: { username: string; password: string }) {
    return this.httpClient
      .post(`${baseUrl}/auth/login`, loginFormValue)
      .subscribe((userExist) => {
        if (userExist) {
          const token = this.getToken(
            loginFormValue.username,
            loginFormValue.password
          );
          this.username.next(loginFormValue.username);
          this.token.next(token);
          localStorage.setItem('username', loginFormValue.username);
          localStorage.setItem('token', token);
          this.alertService.alert(
            `Welcome ${loginFormValue.username}, successfully logged in `,
            true
          );
          this.router.navigate(['departments']);
        } else {
          this.alertService.alert(
            `Wrong credentials, either username or password is wrong!`,
            false
          );
        }
      });
  }

  logout() {
    this.username.next('');
    this.token.next('');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
  }
}
