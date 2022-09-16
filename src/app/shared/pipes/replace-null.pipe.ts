import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceNull',
})
export class ReplaceNullPipe implements PipeTransform {
  transform(n: any): any {
    if (n == null) {
      return '-';
    }
    return n;
  }
}
