import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditionPipeParam'
})
export class ConditionPipeParamPipe implements PipeTransform {

  transform(value: any, limit:number): unknown {
    if(value.length > limit){
      return value.substr(0, limit) + '...';
    }
    else{
      return value;
    }
  }

}
