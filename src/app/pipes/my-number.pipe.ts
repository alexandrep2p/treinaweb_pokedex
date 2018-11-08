import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myNumber'
})
export class MyNumberPipe implements PipeTransform {
  //pipe personalizado para formatar o numero do pokemon

  //recebe um valor numero e retorna string
  transform(value: number ): string {
    return ('000' + value).slice(-3);
  }

}
