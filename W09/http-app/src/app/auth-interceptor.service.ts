import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Request is on its way');
    // return next.handle(req);

    const cloned = req.clone({
      headers: req.headers.set('CustomAuth', 'Bearer YOUR_TOKEN')
    });
    return next.handle(cloned).pipe(tap(event => {
      if(event.type === HttpEventType.Response) {
        console.log('Response arrived: ', event);
      }
    }));
  }

}
