import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ICallRequest } from '../interfaces/ICallRequest';

@Injectable({
  providedIn: 'root',
})
export class CallRequestService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/callRequests').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http
      .post('http://localhost:3000/callRequests', { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  add(data: ICallRequest): any {
    return this.http.post('http://localhost:3000/callRequests/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http
      .post('http://localhost:3000/callRequests/delete', { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  update(data: ICallRequest): any {
    return this.http
      .post('http://localhost:3000/callRequests/update', data)
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }
}
