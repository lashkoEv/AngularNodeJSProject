import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CallUsModalWindowService {
  private isOpen: boolean = false;

  public usersToCall: any[] = [];

  constructor() {}

  public getIsOpen() {
    return this.isOpen;
  }

  public toogleIsOpen() {
    this.isOpen = !this.isOpen;
  }

  public addUserToCall(user: object) {
    this.usersToCall.push(user);

    console.log(this.usersToCall);
  }
}
