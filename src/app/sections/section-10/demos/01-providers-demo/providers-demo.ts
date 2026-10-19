import { Component, inject } from '@angular/core';
import { GREETING, MESSAGE,  } from './tokens';
import { Formatter, UppercaseFormatter } from './formatter';

@Component({
  selector: 'providers-demo',
  templateUrl: './providers-demo.html',
})
export class ProvidersDemo {

  greeting = inject(GREETING);

  formatter = inject(Formatter);

  sameInstance = inject(UppercaseFormatter) === this.formatter;

  message = inject(MESSAGE);

}
