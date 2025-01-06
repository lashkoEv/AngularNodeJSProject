import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private category: ICategory;
  private baseUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getCategory(): ICategory {
    console.log(this.category);
    return this.category;
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categories`).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post(`${this.baseUrl}/categories`, { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: ICategory): any {
    return this.http.post(`${this.baseUrl}/categories/add`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http.post(`${this.baseUrl}/categories/delete`, { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  update(data: ICategory): any {
    return this.http.post(`${this.baseUrl}/categories/update`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setCategory(category: ICategory) {
    return (this.category = category);
  }
}
