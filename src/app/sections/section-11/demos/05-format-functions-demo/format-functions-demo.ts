import { Component, LOCALE_ID, computed, inject, signal } from '@angular/core';
import { formatCurrency, formatDate, formatNumber, formatPercent } from '@angular/common';

@Component({
  selector: 'format-functions-demo',
  templateUrl: './format-functions-demo.html',
})
export class FormatFunctionsDemo {

  locale = inject(LOCALE_ID);

  date = new Date(2026, 8, 29, 14, 30);

  ratio = 0.256;

  amount = signal(1234.5);

  formattedDate = formatDate(this.date, 'mediumDate', this.locale);

  formattedNumber = computed(() => formatNumber(this.amount(), this.locale, '1.0-0'));

  formattedCurrency = computed(() => formatCurrency(this.amount(), this.locale, '$', 'USD'));

  formattedPercent = formatPercent(this.ratio, this.locale);

  setAmount(amount: number) {
    this.amount.set(amount);
  }

}
