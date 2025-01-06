import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ICallRequest } from '../interfaces/ICallRequest';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CallRequestService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/callRequests`).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post(`${this.baseUrl}/callRequests`, { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: ICallRequest): any {
    return this.http.post(`${this.baseUrl}/callRequests/add`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http
      .post(`${this.baseUrl}/callRequests/delete`, { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  update(data: ICallRequest): any {
    return this.http.post(`${this.baseUrl}/callRequests/update`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
