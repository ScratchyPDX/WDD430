import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: false,
  pure: false // <-- fix to enable filter to reprocess data entered in input box, not recommended for large data sets
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string, propName: string): any[] {
    if (!value || !filterString || !propName) {
      return value;
    }
    return value.filter(item => item[propName].includes(filterString));
  }

}
