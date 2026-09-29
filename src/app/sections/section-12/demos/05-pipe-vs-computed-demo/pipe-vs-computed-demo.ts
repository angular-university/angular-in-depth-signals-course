import { Component, LOCALE_ID, computed, inject, signal } from '@angular/core';
import { CurrencyPipe, formatCurrency } from '@angular/common';

@Component({
  selector: 'pipe-vs-computed-demo',
  imports: [CurrencyPipe],
  templateUrl: './pipe-vs-computed-demo.html',
})
export class PipeVsComputedDemo {

  locale = inject(LOCALE_ID);

  amount = signal(1234.5);

  formatted = computed(() => formatCurrency(this.amount(), this.locale, '$', 'USD'));

  setAmount(amount: number) {
    this.amount.set(amount);
  }

}
