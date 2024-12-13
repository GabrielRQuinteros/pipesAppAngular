import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUppercase: boolean = false ): string {
    if( value == null || value == undefined ) return value;

    return toUppercase ? value.toUpperCase(): value.toLocaleLowerCase()
  }

}
