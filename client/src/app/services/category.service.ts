import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private category: ICategory;
  constructor(private http: HttpClient) {}

  getCategory(): ICategory {
    console.log(this.category);
    return this.category;
  }

  getAll(): Observable<any> {
    return this.http.get('/api/categories').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post('/api/categories', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: ICategory): any {
    return this.http.post('/api/categories/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http.post('/api/categories/delete', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  update(data: ICategory): any {
    return this.http.post('/api/categories/update', data).pipe(
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
