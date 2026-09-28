import { Directive, computed, input, linkedSignal, output } from '@angular/core';

@Directive({
  selector: '[myCollapsible]',
  exportAs: 'collapsible',
  host: {
    '[class]': 'hostClass()',
  },
})
export class Collapsible {

  expanded = input(true);

  collapsedClass = input('collapsed');

  open = linkedSignal(() => this.expanded());

  hostClass = computed(() => this.classFor(this.open()));

  opened = output();

  closed = output();

  classFor(open: boolean) {
    if (open) {
      return '';
    }
    return this.collapsedClass();
  }

  toggle() {
    this.open.update((current) => !current);
    if (this.open()) {
      this.opened.emit();
      return;
    }
    this.closed.emit();
  }

}
