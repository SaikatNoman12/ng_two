import { Pipe, PipeTransform } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { retry } from 'rxjs';

@Pipe({
  name: 'filterPipe',
  pure: false
})
export class FilterPipePipe implements PipeTransform {

  // const arr = [];

  transform(values: any, searchData: any): any {
    if (searchData.length === 0) {
      return values;
    }
    else {
      // for (let data of values) {
      //   if (data.name.toLowerCase().indexOf(searchData.toLowerCase()) > -1) {
      //     arr.push(data);
      //   }
      // }

      const arr = values.filter((value: any) => {
        if (value.name.toLowerCase().indexOf(searchData.toLowerCase()) > -1) {
          return value;
        }
      });

      if (arr.length > 0) {
        return arr;
      }
      else {
        return values;
      }

    }
  }




}
