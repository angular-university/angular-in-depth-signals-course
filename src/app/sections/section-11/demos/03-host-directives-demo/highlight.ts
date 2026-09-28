import { Directive, input } from '@angular/core';

@Directive({
  selector: '[myHighlight]',
  host: {
    '[style.background-color]': 'myHighlight()',
  },
})
export class Highlight {

  myHighlight = input('');

}
