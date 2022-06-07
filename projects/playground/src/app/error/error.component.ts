import { AbstractControl } from '@angular/forms';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() control!: AbstractControl;
  errorMsg: string = '';
  constructor() {}

  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add '${implements OnChanges}' to the class.
  //   console.log(changes);
  // }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('hi');

    if (this.control.errors?.['required']) {
      this.errorMsg = 'Required';
    } else {
      this.errorMsg = '';
    }
  }
}
