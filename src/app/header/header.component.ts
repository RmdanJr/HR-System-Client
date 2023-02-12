import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string;

  constructor(public authService: AuthService, public route: Router) {}

  ngOnInit(): void {
    this.authService.username.subscribe((username) => {
      this.username = username;
    });
  }

  ngOnDestroy(): void {
    this.authService.username.unsubscribe();
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/auth/login']);
  }
}
