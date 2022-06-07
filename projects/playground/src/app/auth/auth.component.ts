import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  constructor(private util: UtilService, private http: HttpClient) {}

  async api() {
    const url = '/api/v1/profile';
    const response = this.http.get(url).subscribe((msg: any) => {
      console.log('authResponse', msg);
    });
  }
}
