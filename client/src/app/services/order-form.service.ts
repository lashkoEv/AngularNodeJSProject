import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

import { IOrdering } from '../interfaces/IOrdering';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrderFormService {
  private isOrder: boolean = false;
  private formTitle: string = 'Оформление заказа';
  private orderId: String = '';
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getFormTitle() {
    return this.formTitle;
  }
  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}/order`).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }
  getNovaPoshtaOffices(): Observable<any> {
    return this.http.get(`${this.baseUrl}/delivery/posts`).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  getById(id: String): Observable<any> {
    return this.http.post(`${this.baseUrl}/order`, { id: id }).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  add(data: IOrdering): any {
    return this.http.post(`${this.baseUrl}/order/add`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  updateById(data: IOrdering): any {
    return this.http.post(`${this.baseUrl}/order/update`, data).pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  deleteById(id: String): any {
    return this.http.post(`${this.baseUrl}/order/delete`, { id: id }).pipe(
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
  public setOrderId(orderId: String) {
    this.orderId = orderId;
  }

  public getOrderId() {
    return this.orderId;
  }
}
