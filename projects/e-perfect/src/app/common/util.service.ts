import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type method = 'get' | 'post' | 'put' | 'delete';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  access_token: string | null = null;

  constructor(private http: HttpClient) {}

  xHttp(url: string, type: method = 'get', body: any = null): Promise<any> {
    return new Promise((resolve: Function, reject: Function) => {
      const options = {
        body,
        headers: {
          Authorization: `Bearer ${this.access_token}`,
        },
      };
      this.http.request(type, url, options).subscribe({
        next: resolve.bind(this),
        error: reject.bind(this),
      });
    });
  }
}
