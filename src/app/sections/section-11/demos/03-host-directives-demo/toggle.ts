import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[myToggle]',
  exportAs: 'toggle',
  host: {
    '[attr.aria-pressed]': 'on()',
    '(click)': 'flip()',
  },
})
export class Toggle {

  on = signal(false);

  flip() {
    this.on.update((current) => !current);
  }

}
