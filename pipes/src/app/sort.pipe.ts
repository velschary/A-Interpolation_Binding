import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any): any {
    console.log(value)
    console.log(args)
    value.sort((a:any,b:any)=>a[args[0]]>b[args[0]]?1:-1)
    return value;
  }

}
