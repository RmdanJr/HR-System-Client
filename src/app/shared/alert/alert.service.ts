import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public message: BehaviorSubject<string> = new BehaviorSubject('');
  public success: BehaviorSubject<boolean> = new BehaviorSubject(true);

  alert(message: string, success: boolean) {
    this.open.next(true);
    this.message.next(message);
    this.success.next(success);
    setTimeout(() => this.close(), 5000);
  }

  close() {
    this.open.next(false);
  }
}
