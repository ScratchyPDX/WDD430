import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Order } from '../models/order.model';
import { CheckoutData } from '../models/checkout-data.model';
import { Product } from '../models/product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExternalServicesService {
    private baseURL = 'http://server-nodejs.cit.byui.edu:3000/';

  constructor(private http: HttpClient) { }

  getData(category: string): Observable<Product[]> {
    return this.http.get<any>(`${this.baseURL}products/search/${category}`).pipe(
      map(response => response.Result || response),
      catchError(this.handleError)
    );
  }

  findProductById(id: string): Observable<Product> {
    return this.http.get<any>(`${this.baseURL}product/${id}`).pipe(
      map(response => response.Result || response),
      catchError(this.handleError)
    );
  }

  checkout(payload: CheckoutData): Observable<any> {
    return this.http.post(`${this.baseURL}checkout/`, payload).pipe(
      catchError(this.handleError)
    );
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseURL}orders`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: any): Observable<never> {
    console.error('API Error:', error);
    return throwError(() => new Error(error.message || 'Server error'));
  }
}
