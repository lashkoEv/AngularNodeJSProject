import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/IProduct';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private readonly items$: BehaviorSubject<IProduct[]> = new BehaviorSubject<
    IProduct[]
  >([]);

  getAll() {
    this.http
      .get<IProduct[]>('http://localhost:3000/products')
      .subscribe((receivedItems) => this.items$.next(receivedItems));

    return this.items$.asObservable();
    // this.http.get('http://localhost:3000/products').pipe(
    //   catchError((err) => {
    //     console.log(err);
    //     throw err;
    //   })
    // );
  }

  getById(id: String): Observable<any> {
    return this.http.post('http://localhost:3000/products', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: IProduct): any {
    return this.http.post('http://localhost:3000/products/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http
      .post('http://localhost:3000/products/delete', { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  update(data: IProduct): any {
    return this.http.post('http://localhost:3000/products/update', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
}
