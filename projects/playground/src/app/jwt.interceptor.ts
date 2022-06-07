import { Router } from '@angular/router';
import { UtilService } from './util.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpClient,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private util: UtilService,
    private router: Router,
    private http: HttpClient
  ) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: any) => {
        if (
          error instanceof HttpErrorResponse &&
          !req.url.includes('auth/signin') &&
          error.status === 401
        ) {
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    const refresh_token = localStorage.getItem('refresh_token');

    return this.http.post('/api/v1/refreshToken', { refresh_token }).pipe(
      switchMap((response: any) => {
        this.util.access_token = response.access_token;
        console.log('refreshToken', `Bearer ${this.util.access_token}`);
        return next.handle(
          request.clone({
            headers: request.headers.set(
              'Authorization',
              `Bearer ${this.util.access_token}`
            ),
          })
        );
      }),
      catchError((err: any) => {
        this.router.navigate(['/login']);
        return throwError(err);
      })
    );
  }
}
