import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { baseUrl } from '../app.constants';
import { AlertService } from '../shared/alert/alert.service';
import { Credentials } from './credentials.model';

export type AuthStatus = 'MANAGER' | 'EMPLOYEE' | 'NOT_LOGGED_IN';

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
  public isManager: BehaviorSubject<boolean> = new BehaviorSubject(
    JSON.parse(localStorage.getItem('isManager') ?? 'false')
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
      .post<Credentials>(`${baseUrl}/auth/login`, loginFormValue)
      .subscribe((credentials) => {
        if (credentials.rightCredentials) {
          const token = this.getToken(
            loginFormValue.username,
            loginFormValue.password
          );
          this.username.next(loginFormValue.username);
          this.token.next(token);
          this.isManager.next(credentials.manager);
          localStorage.setItem('username', loginFormValue.username);
          localStorage.setItem('token', token);
          localStorage.setItem(
            'isManager',
            JSON.stringify(credentials.manager)
          );
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

  isLoggedin() {
    return this.username.value && this.token.value;
  }

  getStatus(): AuthStatus {
    if (this.isManager.value) return 'MANAGER';
    if (this.isLoggedin()) return 'EMPLOYEE';
    return 'NOT_LOGGED_IN';
  }

  logout() {
    this.username.next('');
    this.token.next('');
    this.isManager.next(false);
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('isManager');
  }
}
