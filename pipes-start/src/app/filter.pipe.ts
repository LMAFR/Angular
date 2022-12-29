import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, stringFilter:string, propName:string): any {
    if (value.length === 0 || stringFilter === ''){
      return value;
    }
    const filteredArray = [];
    for (const item of value) {
      if (item[propName] === stringFilter) {
        filteredArray.push(item);
      }
    }
    return filteredArray;
  }

}
