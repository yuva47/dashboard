import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'error',
  pure: false,
})
export class ErrorPipe implements PipeTransform {
  transform(value: AbstractControl, ...args: unknown[]): unknown {
    console.log('Yes');
    return 'yes';
  }
}
