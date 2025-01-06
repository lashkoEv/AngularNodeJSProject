import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private isAuthorized: boolean;
  private isAdmin: boolean;
  public showForm: boolean;
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    this.isAuthorized = false;
    this.isAdmin = false;
    this.showForm = false;
  }

  getAuthState() {
    return this.isAuthorized;
  }

  setAuthState() {
    this.isAuthorized = !this.isAuthorized;
  }

  getFormState() {
    return this.showForm;
  }

  setFormState() {
    this.showForm = !this.showForm;
  }

  setRole(role: boolean) {
    this.isAdmin = role;
  }

  getRole() {
    return this.isAdmin;
  }

  authorize(data) {
    return this.http.post(`${this.baseUrl}/auth`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  register(user: IUser) {
    return this.http.post(`${this.baseUrl}/register`, user).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  update(data: IUser): any {
    console.log(data);
    return this.http.post(`${this.baseUrl}/user/update`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  isValidData(user: IUser) {
    const condition =
      user.login.length >= 5 &&
      user.password.length >= 5 &&
      /\d/.test(user.password) &&
      /[a-zA-Z]/.test(user.password);
    user.isAdmin = false;

    console.log(user);
    return condition ? true : false;
  }
}
