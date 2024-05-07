import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { IOrdering } from '../interfaces/IOrdering';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  private isOrder: boolean = false;
  private formTitle: string = 'Оформление заказа';
  private orderId: string = '';

  constructor(private http: HttpClient) {}

  public getFormTitle() {
    return this.formTitle;
  }
  getAll(): Observable<any> {
    return this.http.get('http://localhost:3000/order').pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post('http://localhost:3000/order', { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: IOrdering): any {
    return this.http.post('http://localhost:3000/order/add', data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http
      .post('http://localhost:3000/order/delete', { id: id })
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      );
  }

  public hideForm() {
    this.isOrder = false;
  }
  public showForm() {
    this.isOrder = true;
  }

  public getIsOrder(): boolean {
    return this.isOrder;
  }
  public setOrderId(orderId: string) {
    this.orderId = orderId;
  }

  public getOrderId() {
    return this.orderId;
  }
}
