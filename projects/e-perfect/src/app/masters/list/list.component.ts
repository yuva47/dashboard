import { Component, OnInit } from '@angular/core';

interface Revieve {
  code: string;
  data: any;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  constructor() {}
}
