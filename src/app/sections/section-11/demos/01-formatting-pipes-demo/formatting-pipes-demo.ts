import { Component } from '@angular/core';
import { CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'formatting-pipes-demo',
  imports: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './formatting-pipes-demo.html',
})
export class FormattingPipesDemo {

  date = new Date(2026, 8, 29, 14, 30);

  amount = 1234.5;

  ratio = 0.256;

}
