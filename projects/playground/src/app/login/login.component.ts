import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  title!: String;

  constructor(private util: UtilService, private router: Router) {}

  ngOnInit(): void {
    console.log();
  }

  async api() {
    const url = '/api/v1/login';
    const response = await this.util.xHttp(url, 'post');
    if (!this.util.access_token) {
      this.util.access_token = response.access_token;
      localStorage.setItem('refresh_token', response.refresh_token);
    }

    this.router.navigate(['/dashboard']);
  }
}
