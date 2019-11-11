import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powNumber'
})
export class PowNumberPipe implements PipeTransform {

  transform(value: number, num: number): number {
    return Math.pow(value, num);
  }

}
