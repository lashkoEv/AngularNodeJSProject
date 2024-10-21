import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private product: IProduct;
  constructor(private http: HttpClient) {}

  getProduct(): IProduct {
    console.log(this.product);

    return this.product;
  }

  getAll(): Observable<any> {
    return this.http.get('/api/products').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  getAllFavorite(): Observable<any> {
    return this.http.get('/api/favorite').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post('/api/products', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getByCategory(category: ICategory): Observable<any> {
    return this.http
      .post('/api/products/category', { category: category })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  add(data: IProduct): any {
    return this.http.post('/api/products/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  addFavorite(data: IProduct): any {
    return this.http.post('/api/products/favorite/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http.post('/api/products/delete', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteFavoriteById(id: String): any {
    return this.http.post('/api/products/favorite/delete', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  update(data: IProduct): any {
    return this.http.post('/api/products/update', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setProduct(product: IProduct) {
    return (this.product = product);
  }
}
