import { Component } from '@angular/core';
import { CallUsModalWindowService } from '../../services/call-us-modal-window.service';

@Component({
  selector: 'app-call-us-modal-window',
  templateUrl: './call-us-modal-window.component.html',
  styleUrl: './call-us-modal-window.component.scss'
})

export class CallUsModalWindowComponent {
  public inputName: string = '';
  public inputPhoneNumber: string = '';

  constructor(
    public callUsModalWindowService: CallUsModalWindowService
  ){}

  public isValidData(): boolean{
    if(this.inputName && this.inputPhoneNumber && this.inputPhoneNumber.length === 10){
      return true
    } else return false
  }

  public addUser(user: object){
    this.callUsModalWindowService.addUserToCall(user);

    this.callUsModalWindowService.toogleIsOpen();
  }

  public closeWindow(){
    this.callUsModalWindowService.toogleIsOpen();
  }
}
