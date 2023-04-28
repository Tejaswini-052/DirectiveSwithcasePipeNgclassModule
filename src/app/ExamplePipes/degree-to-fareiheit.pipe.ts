import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'degreeToFareiheit'
})
export class DegreeToFareiheitPipe implements PipeTransform {

  transform(value: number, ...args: number[]): number {
   let [price]=args;
   return ( value * 9/5) + price;
  }

}
