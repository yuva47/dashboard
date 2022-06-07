import { HeaderInterceptor } from './header.interceptor';
import { JwtInterceptor } from './jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPopperModule } from 'ngx-popper';
import { FilterComponent } from './filter/filter.component';
import { TestAppComponent } from './test-app/test-app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPipe } from './error.pipe';
import { ErrorComponent } from './error/error.component';
import { DashletDirective } from './dashlets/dashlet.directive';
import { TableComponent } from './dashlets/table/table.component';
import { UnlessDirective } from './unless.directive';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    TestAppComponent,
    LoginComponent,
    SignupComponent,
    ErrorPipe,
    ErrorComponent,
    DashletDirective,
    TableComponent,
    UnlessDirective,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPopperModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
