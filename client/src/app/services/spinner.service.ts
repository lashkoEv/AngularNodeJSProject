import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor() {}
  public show() {
    this.isLoading.next(true);
  }

  public hide() {
    this.isLoading.next(false);
  }

  public start() {
    this.show();
    setTimeout(() => {
      this.hide();
    }, 1000);
  }
}
