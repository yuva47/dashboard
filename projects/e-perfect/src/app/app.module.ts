import { MaterialModule } from './../../../playground/src/app/material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './masters/list/list.component';
import { HttpClientModule } from '@angular/common/http';
import { DashletDirective } from './dashlets/dashlet.directive';
import { TableComponent } from './dashlets/table/table.component';
import { PieChartComponent } from './dashlets/pie-chart/pie-chart.component';
import { BarChartComponent } from './dashlets/bar-chart/bar-chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    DashletDirective,
    TableComponent,
    PieChartComponent,
    BarChartComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    KtdGridModule,
    BrowserAnimationsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
