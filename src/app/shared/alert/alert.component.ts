import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlertService } from 'src/app/shared/alert/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit, OnDestroy {
  open: boolean;
  message: string;
  success: boolean;

  constructor(public alertService: AlertService) {}

  ngOnInit(): void {
    this.alertService.open.subscribe((open) => (this.open = open));
    this.alertService.message.subscribe((message) => (this.message = message));
    this.alertService.success.subscribe((success) => (this.success = success));
  }

  ngOnDestroy(): void {
    this.alertService.open.unsubscribe();
    this.alertService.message.unsubscribe();
    this.alertService.success.unsubscribe();
  }

  onClose() {
    this.alertService.close();
  }
}
