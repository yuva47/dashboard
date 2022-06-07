import { UtilService } from './../common/util.service';
import { Component, OnInit } from '@angular/core';
import { KtdGridLayout, ktdTrackById } from '@katoid/angular-grid-layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cols!: number;
  name!: string;
  rowHeight!: number;
  transition: string =
    'transform 500ms ease, width 500ms ease, height 500ms ease';
  layout: KtdGridLayout = [];
  trackById = ktdTrackById;
  constructor(private util: UtilService) {}

  async ngOnInit(): Promise<void> {
    await this._init();
  }

  async _init(): Promise<void> {
    const dashboard = await this.util.xHttp('/assets/dashboard.json');
    console.log(dashboard);
    this.cols = dashboard.cols;
    this.name = dashboard.name;
    this.rowHeight = dashboard.rowHeight;
    this.layout = dashboard.layout;
  }

  onLayoutUpdated($event: KtdGridLayout) {
    console.log($event);
  }
}
