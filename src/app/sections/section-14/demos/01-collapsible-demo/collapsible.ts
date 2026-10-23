import { Directive, computed, model, output } from '@angular/core';

@Directive({
  selector: '[myCollapsible]',
  exportAs: 'collapsible',
  host: {
    style: 'overflow: hidden',
    '[style.max-height]': 'maxHeight()',
    '(click)': 'toggle()',
  },
})
export class Collapsible {

  expanded = model(true);

  opened = output();

  closed = output();

  maxHeight = computed(() => {
    if (this.expanded()) {
      return 'none';
    }
    return '1.4em';
  });

  toggle() {
    this.expanded.update((current) => !current);
    if (this.expanded()) {
      this.opened.emit();
      return;
    }
    this.closed.emit();
  }

}
