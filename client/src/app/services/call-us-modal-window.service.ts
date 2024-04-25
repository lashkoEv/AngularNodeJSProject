import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CallUsModalWindowService {
  private isOpen: boolean = false;
  public isCorrectPhoneNum: boolean = false;
  public usersToCall: any[] = [];

  private phoneNum: string = '';

  constructor() {}

  public getIsOpen() {
    return this.isOpen;
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
