import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  public open: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public message: Subject<string> = new Subject();
  public success: Subject<boolean> = new Subject();

  alert(message: string, success: boolean) {
    this.open.next(true);
    this.message.next(message);
    this.success.next(success);
  }

  close() {
    this.open.next(false);
  }
}
