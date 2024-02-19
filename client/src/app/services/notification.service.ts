import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private isVisible = new BehaviorSubject<boolean>(false);

  public getIsVisible() {
    return this.isVisible;
  }

  public callNotification() {
    this.isVisible.next(true);
  }
  public hideNotification() {
    this.isVisible.next(false);
  }
  public notify() {
    this.callNotification();
    setTimeout(() => {
      this.hideNotification();
    }, 2000);
  }
}
