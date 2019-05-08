import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'soundBoxFilter',
  pure: false,
})
export class ListPipe implements PipeTransform {
  transform(items: any[], filter: string): any {
    if (!items || !filter) {
      return items;
    }

    return items.filter(item => item.title.trim().toLowerCase().includes(filter.toLowerCase()));
  }
}
