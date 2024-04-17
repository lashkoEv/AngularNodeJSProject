import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { SpinnerService } from '../../services/spinner.service';
import { NotificationService } from '../../services/notification.service';
import { IUser } from '../../interfaces/iUser';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrl: './authorization-form.component.scss',
})
export class AuthorizationFormComponent {
  public hasAccount: boolean = true;

  constructor(
    // private authorizationService: AuthorizationService,
    private authorizationService: AuthorizationService,
    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  async authorize(data: any) {
    await this.authorizationService.authorize(data).subscribe((data: any) => {
      if (data) {
        this.authorizationService.setAuthState();

        this.authorizationService.setFormState();

        this.spinner.start();


        this.authorizationService.setRole(data.isAdmin);

        console.log(data);

        this.spinner.start();

        this.notification.setTextOfNotification('Авторизация успешна');
      } else {
        this.notification.setTextOfNotification(`Ошибка авторизации `);
      }

      this.notification.notify();
    });
  }

  registration(user: IUser){
    if(this.authorizationService.isValidData(user)){
      this.spinner.start();
      
      this.authorizationService.setAuthState();
      this.authorizationService.setRole(user.isAdmin);
      
      this.close();

      console.log('done');
      
    }
  }

  regOrAuth(data: IUser){
    this.hasAccount ? this.authorize(data) : this.registration(data);
  }

  toogleHasAcc(){    
    this.hasAccount = !this.hasAccount;
  }

  close() {
    this.authorizationService.setFormState();
  }
}
