import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.authService.isManager.value) {
      return true;
    } else if (this.authService.isLoggedin()) {
      return (
        !state.url.endsWith('new') &&
        !state.url.endsWith('edit') &&
        !state.url.endsWith('delete')
      );
    }
    return false;
  }
}
