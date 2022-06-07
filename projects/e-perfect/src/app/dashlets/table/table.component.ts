import { UtilService } from './../../common/util.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  gridItem: any;
  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private util: UtilService) {}

  async ngOnInit(): Promise<void> {
    console.log(this.gridItem);
    await this._init();
  }

  async _init() {
    this.displayedColumns = this.gridItem.columns;
    if (this.gridItem.api) {
      await this.loadData();
    }
  }

  async loadData() {
    this.dataSource.data = await this.util.xHttp(this.gridItem.api);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  pascalCase(text: string) {
    return text
      ?.split('_')
      .map((x) => x[0].toUpperCase() + x.slice(1))
      .join(' ');
  }
}
