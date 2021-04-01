import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialstrength'
})
export class ExponentialstrengthPipe implements PipeTransform {

  transform(value: number, exponent:number): number {
    return Math.pow(value, exponent);
    //return Math.pow(value,isNaN(exponent)?1:exponent);
  }

}
