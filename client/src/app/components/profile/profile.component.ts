import { IUser } from '../../interfaces/IUser';
import { AuthorizationService } from './../../services/authorization.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  visible: boolean = false;
  value!: string;

  newPassword: string = '';
  confirmPassword: string = '';
  confirmPasswordold: string = '';

  passwordsMatch: boolean = true;
  passwordsMatchold: boolean = true;

  showerroenew: boolean = true;
  showerroeold: boolean = true;

  user: IUser;

  constructor(private authorizationService: AuthorizationService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  }

  getAuthState() {
    return this.authorizationService.getAuthState();
  }

  showDialog() {
    this.visible = true;
    this.newPassword = '';
    this.confirmPassword = '';
    this.confirmPasswordold = '';

    this.showerroenew = true;
    this.showerroeold = true;
  }

  checkPasswords() {
    this.passwordsMatch = this.newPassword === this.confirmPassword;
  }
  checkPasswordsold() {
    this.passwordsMatchold = this.user.password === this.confirmPasswordold;
  }
  changePassword() {
    if (!this.passwordsMatch) {
      this.showerroenew = false;
      // alert('Новые пароли не совпадают');
    } else if (!this.passwordsMatchold) {
      this.showerroeold = false;
      // alert('Старые пароли не совпадают');
    } else {
      if (this.passwordsMatch) {
        this.showerroenew = true;
      }
      if (this.passwordsMatchold) {
        this.showerroeold = true;
      }
      if (this.passwordsMatch && this.passwordsMatchold) {
        this.visible = false;
      }
    }
  }
}
