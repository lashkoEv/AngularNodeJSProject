import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  visible: boolean = false;
  value!: string;
  newPassword: string = '';
  confirmPassword: string = '';
  passwordsMatch: boolean = true;

  user = JSON.parse(localStorage.getItem('user'));

  showDialog() {
    this.visible = true;
  }

  checkPasswords() {
    this.passwordsMatch = this.newPassword === this.confirmPassword;
  }
  changePassword() {
    if (!this.passwordsMatch) {
      alert('Новый пароли не совпадают');
    } else {
      this.visible = false;
    }
  }
}
