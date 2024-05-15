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
    this.passwordsMatch =
      this.newPassword === this.confirmPassword &&
      this.newPassword.length > 0 &&
      this.confirmPassword.length > 0;
  }

  checkPasswordsold() {
    this.passwordsMatchold =
      this.user.password === this.confirmPasswordold &&
      this.confirmPasswordold.length > 0;
  }

  changePassword() {
    this.checkPasswords();
    this.checkPasswordsold();

    this.showerroenew = this.passwordsMatch;

    this.showerroeold = this.passwordsMatchold;

    if (this.passwordsMatch && this.passwordsMatchold) {
      this.user.password = this.newPassword;

      this.authorizationService.update(this.user).subscribe((data) => {
        if (data) {
          localStorage.setItem('user', JSON.stringify(this.user));
        }
      });
    }
  }
}
