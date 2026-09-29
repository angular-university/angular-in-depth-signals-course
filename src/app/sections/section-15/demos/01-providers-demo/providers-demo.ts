import { Component, inject } from '@angular/core';
import { GREETING, MESSAGE, PLUGINS } from './tokens';
import { Formatter, UppercaseFormatter } from './formatter';

@Component({
  selector: 'providers-demo',
  providers: [
    { provide: GREETING, useValue: 'Hello' },
    { provide: Formatter, useClass: UppercaseFormatter },
    { provide: UppercaseFormatter, useExisting: Formatter },
    { provide: MESSAGE, useFactory: () => `${inject(GREETING)} from a factory` },
    { provide: PLUGINS, useValue: 'first', multi: true },
    { provide: PLUGINS, useValue: 'second', multi: true },
  ],
  templateUrl: './providers-demo.html',
})
export class ProvidersDemo {

  greeting = inject(GREETING);

  formatter = inject(Formatter);

  sameInstance = inject(UppercaseFormatter) === this.formatter;

  message = inject(MESSAGE);

  plugins = inject(PLUGINS);

}
