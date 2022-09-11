import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number | undefined, units: string): any {
    if (!value) return '';

    switch (units) {
      case 'km':
        return value * 1.609;
      case 'm':
        return value * 1609;
      case 'cm':
        return value * 160900;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
