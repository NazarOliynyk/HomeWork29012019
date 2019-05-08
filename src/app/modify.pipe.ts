import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'modify'
})
export class ModifyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // if (typeof value === 'string') {
    //   return 'MODIFIED hero by default';
    // }
    // if (typeof value === 'number') {
    //   return 100;
    // }

    return {
      name: 'Default Name',
      health: 100,
      power: 30
    };
  }

}
