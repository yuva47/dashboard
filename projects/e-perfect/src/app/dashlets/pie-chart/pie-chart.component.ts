import { UtilService } from './../../common/util.service';
import { Component, OnInit } from '@angular/core';
import { ThemeOption } from 'ngx-echarts';
import { CoolTheme } from './cooltheme';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
})
export class PieChartComponent implements OnInit {
  gridItem!: any;
  theme!: string | ThemeOption;
  cooltheme = CoolTheme;
  value!: number;
  options: any = {
    tooltip: {
      trigger: 'item',
      formatter: ' {a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      x: 'center',
      y: 'bottom',
      data: [],
    },
    calculable: true,
  };

  constructor(private util: UtilService) {}

  ngOnInit(): void {
    console.log();
    this._init();
  }

  async _init() {
    Object.assign(this.options, this.gridItem.options);
    const response = await this.util.xHttp(this.gridItem.api);
    this.options.legend.data = response.map((x: any) => x.name);
    this.options.series[0].data = response;
    this.value = response.reduce((a: number, c: any) => a + c.value, 0);
    this.options.title.subtext = this.options.title.subtext.replace(
      '{{value}}',
      this.value
    );
    console.log(response);
  }
}
