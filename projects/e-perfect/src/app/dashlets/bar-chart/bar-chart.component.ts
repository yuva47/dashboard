import { UtilService } from './../../common/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  gridItem: any;

  initOpts = {
    renderer: 'svg',
    width: 700,
    height: 350,
  };

  options: any = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        data: [],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'Counters',
        type: 'bar',
        barWidth: '50%',
        data: [],
      },
    ],
  };
  constructor(private util: UtilService) {}

  async ngOnInit(): Promise<void> {
    // Object.assign(this.options, this.gridItem.options);
    const response = await this.util.xHttp(this.gridItem.api);
    this.options.xAxis[0].data = response.map((x: any) => x.name);
    this.options.series[0].data = response.map((x: any) => x.value);
    console.log(response);
  }
}
