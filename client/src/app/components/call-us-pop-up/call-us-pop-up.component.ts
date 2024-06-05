import { Component } from '@angular/core';
import { CallRequestService } from '../../services/call-request.service';
import { CallUsModalWindowService } from '../../services/call-us-modal-window.service';

@Component({
  selector: 'app-call-us-pop-up',
  templateUrl: './call-us-pop-up.component.html',
  styleUrl: './call-us-pop-up.component.scss',
})
export class CallUsPopUpComponent {
  public inputName: string = '';
  public isVisible: boolean;

  constructor(
    public callUsModalWindowService: CallUsModalWindowService,
    private callRequestService: CallRequestService
  ) {
    this.callUsModalWindowService
      .getIsVisible()
      .subscribe((visible) => (this.isVisible = visible));
  }

  public isValidData(): boolean {
    if (this.inputName && this.callUsModalWindowService.isCorrectPhoneNum) {
      return true;
    } else return false;
  }

  public addUser(user: any) {
    this.callUsModalWindowService.addUserToCall(user);

    this.callRequestService.add(user).subscribe((data) => {
      if (data.ok) {
        this.callUsModalWindowService.toggleIsVisible();
      }
    });
  }

  public closeWindow() {
    this.callUsModalWindowService.toggleIsVisible();
  }
}
