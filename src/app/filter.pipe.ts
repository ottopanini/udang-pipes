import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propname: string): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const results = [];
    for (const item of value) {
      if (item[propname] === filterString) {
        results.push(item);
      }
    }

    return results;
  }

}
