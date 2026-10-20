import { Component, LOCALE_ID, inject } from '@angular/core';
import { formatCurrency, formatDate, formatNumber, formatPercent } from '@angular/common';

@Component({
  selector: 'format-functions-demo',
  templateUrl: './format-functions-demo.html',
})
export class FormatFunctionsDemo {

  locale = inject(LOCALE_ID);

  date = new Date(2000, 0, 1, 14, 30);

  ratio = 0.256;

  amount = 1234.5;

  formattedDate = formatDate(this.date, 'mediumDate', this.locale);

  formattedNumber = formatNumber(this.amount, this.locale, '1.0-0');

  formattedCurrency = formatCurrency(this.amount, this.locale, '$', 'USD');

  formattedPercent = formatPercent(this.ratio, this.locale);

}
