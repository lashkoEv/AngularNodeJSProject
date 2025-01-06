import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IConsultation } from '../interfaces/IConsultation';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConsultationService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/consultations`).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post(`${this.baseUrl}/consultations`, { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: IConsultation): any {
    return this.http.post(`${this.baseUrl}/consultations/add`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http
      .post(`${this.baseUrl}/consultations/delete`, { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  update(data: IConsultation): any {
    return this.http.post(`${this.baseUrl}/consultations/update`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
