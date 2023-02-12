import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthHttpHeadersInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!req.url.endsWith('/auth/login') && this.authService.token.value)
      req = req.clone({
        setHeaders: { Authorization: `Basic ${this.authService.token.value}` },
      });
    return next.handle(req);
  }
}
