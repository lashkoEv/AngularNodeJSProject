import { AuthorizationService } from './../../services/authorization.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  constructor(private authorizationService: AuthorizationService) {}

  getAuthState() {
    return this.authorizationService.getAuthState();
  }
}
