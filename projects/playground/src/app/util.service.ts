import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type method = 'get' | 'post' | 'put' | 'delete';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  access_token: any;
  constructor(private http: HttpClient) {}

  xHttp(url: string, type: method = 'get', body: any = null): Promise<any> {
    console.log(this);
    const token = this.access_token;
    return new Promise((resolve: Function, reject: Function) => {
      let options = {
        body,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      this.http.request(type, url, options).subscribe({
        next: resolve.bind(this),
        error: reject.bind(this),
      });
    });
  }
}
