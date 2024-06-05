import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CallUsModalWindowService {
  private isOpen: boolean = false;
  public isCorrectPhoneNum: boolean = false;
  public usersToCall: any[] = [];
  private isVisible = new BehaviorSubject<boolean>(false);

  private phoneNum: string = '';

  constructor() {}

  public getIsOpen() {
    return this.isOpen;
  }

  public getIsVisible() {
    return this.isVisible.asObservable();
  }

  public toggleIsVisible() {
    this.isVisible.next(!this.isVisible.value);
  }

  public toogleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  public setPhoneNum(phoneNumber: string) {
    this.phoneNum = phoneNumber;
  }

  public addUserToCall(user: any) {
    user.phone = this.phoneNum;
    this.usersToCall.push(user);

    console.log(this.usersToCall);
  }
}
