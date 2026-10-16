import { Component, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { CurrencyPipe, DATE_PIPE_DEFAULT_OPTIONS, DatePipe } from '@angular/common';

@Component({
  selector: 'configured-format',
  imports: [DatePipe, CurrencyPipe],
  providers: [
    { provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat: 'fullDate' } },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' },
  ],
  templateUrl: './configured-format.html',
})
export class ConfiguredFormat {

  date = new Date(2026, 8, 29, 14, 30);

  amount = 1234.5;

}
