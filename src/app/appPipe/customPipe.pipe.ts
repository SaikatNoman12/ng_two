import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customPipe'
})

export class CustomPipePipe implements PipeTransform {

    transform(value: any) {
        return value + ' Hello JavaScript';
    }

}