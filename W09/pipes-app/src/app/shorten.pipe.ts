import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'shorten',
  standalone: false
})
export class ShortenPipe implements PipeTransform{

  transform(value: string, limit: number) {
    if (value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }

}
