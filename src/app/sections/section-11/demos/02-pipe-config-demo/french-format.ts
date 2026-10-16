import { Component, LOCALE_ID } from '@angular/core';
import { CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  selector: 'french-format',
  imports: [DatePipe, CurrencyPipe],
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
  templateUrl: './french-format.html',
})
export class FrenchFormat {

  date = new Date(2026, 8, 29, 14, 30);

  amount = 1234.5;

}
