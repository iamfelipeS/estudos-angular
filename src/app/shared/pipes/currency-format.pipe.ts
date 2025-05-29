import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyBRL',
   standalone: false,
})
export class CurrencyFormatPipe implements PipeTransform {
  transform(value: number | undefined | null, currencyCode: string = 'BRL', display: string | boolean = 'symbol', digitsInfo: string = '1.2-2'): string | null {
    if (value === undefined || value === null) return '';

    // Formata o valor com o símbolo da moeda
    let formattedValue = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);

    // Adiciona espaço extra após o símbolo da moeda
    formattedValue = formattedValue.replace(/(R\$)/,'$1');

    return formattedValue;
  }
}
