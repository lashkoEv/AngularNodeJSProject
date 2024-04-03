import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { SpinnerService } from '../../services/spinner.service';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrl: './authorization-form.component.scss',
})
export class AuthorizationFormComponent {
  constructor(
    private authorizationService: AuthorizationService,
    private spinner: SpinnerService,
    private notification: NotificationService
  ) {}

  async authorize(data: any) {
    await this.authorizationService.authorize(data).subscribe((data) => {
      if (data) {
        this.authorizationService.setAuthState();
        this.authorizationService.setFormState();
        this.spinner.start();
        this.notification.setTextOfNotification('Авторизация успешна');
      } else {
        this.notification.setTextOfNotification(`Ошибка авторизации `);
      }

      this.notification.notify();
    });
  }

  close() {
    this.authorizationService.setFormState();
  }
}
