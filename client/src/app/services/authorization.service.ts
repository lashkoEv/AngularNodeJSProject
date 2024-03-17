import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  private isAuthorized: boolean;
  private showForm: boolean;

  constructor(private http: HttpClient) {
    this.isAuthorized = false;
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

  setFromState() {
    this.showForm = !this.showForm;
  }

  authorize(data) {
    return this.http.post('http://localhost:3000/auth', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
