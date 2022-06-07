import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { dashlets } from './dashlets';

@Directive({
  selector: '[appDashlet]',
})
export class DashletDirective implements OnInit {
  @Input() gridItem: any;

  constructor(private viewContainer: ViewContainerRef) {}

  ngOnInit(): void {
    if (!dashlets[this.gridItem.component]) return;
    const element: any = this.viewContainer.createComponent(
      dashlets[this.gridItem.component]
    );
    element.instance.gridItem = this.gridItem;
  }
}
