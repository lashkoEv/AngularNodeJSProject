import { Component } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrl: './authorization-form.component.scss',
})
export class AuthorizationFormComponent {
  constructor(private authorizationService: AuthorizationService) {}

  async authorize(data: any) {
    await this.authorizationService.authorize(data).subscribe((data) => {
      if (data) {
        this.authorizationService.setAuthState();
        this.authorizationService.setFormState();
      }
    });
  }

  close() {
    this.authorizationService.setFormState();
  }
}
