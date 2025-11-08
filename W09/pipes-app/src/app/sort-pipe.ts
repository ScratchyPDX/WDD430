import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: false,
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: string[], propName: string): string[] {
    return value.sort((a, b) => a[propName].localeCompare(b[propName]));
  }

}
