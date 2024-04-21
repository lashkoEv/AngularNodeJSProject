import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductModalWindowService {
  private showForm: boolean;

  constructor() {
    this.showForm = false;
  }

  getFormState() {
    return this.showForm;
  }

  changeFormState() {
    this.showForm = !this.showForm;
  }
}
