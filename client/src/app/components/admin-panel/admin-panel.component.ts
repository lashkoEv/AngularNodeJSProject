import { CategoryService } from '../../services/category.service';

import { FormService } from '../../services/form.service';
import { AuthorizationService } from '../../services/authorization.service';
import { Component } from '@angular/core';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  constructor(
    private authorizationService: AuthorizationService,
    public formService: FormService,
    private categoryService: CategoryService
  ) {}

  getRole() {
    return (
      this.authorizationService.getRole() &&
      this.authorizationService.getAuthState()
    );
  }

  addCategory() {
    const resetCategory = null;
    this.categoryService.setCategory(resetCategory);
    this.formService.invokeAddCategory();
  }
}
