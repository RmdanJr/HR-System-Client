import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  username: string;

  constructor(public authService: AuthService) {}

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
  }
}
