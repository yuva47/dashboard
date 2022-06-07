import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private util: UtilService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const userToken = this.util.access_token;
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${userToken}`),
    });
    return next.handle(modifiedReq);
  }
}
