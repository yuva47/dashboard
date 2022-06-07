import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  condition = false;

  formGroup!: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private formBuilder: FormBuilder) {
    this.formGroup = this.formBuilder.group({
      email: [''],
    });
  }

  getErrorMessage() {
    console.log('hi');
  }

  stopPropogation(event: any) {
    event.stopPropagation();
  }
}
