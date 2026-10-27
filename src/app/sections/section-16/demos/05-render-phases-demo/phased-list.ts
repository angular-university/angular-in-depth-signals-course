import { Component, Injector, afterNextRender, inject, signal } from '@angular/core';
import { PhasedBox } from './phased-box';

@Component({
  selector: 'phased-list',
  imports: [PhasedBox],
  templateUrl: './phased-list.html',
})
export class PhasedList {

  injector = inject(Injector);

  items = Array.from({ length: 500 }, (_, index) => `Box ${index + 1} with some wrapping text`);

  size = signal(120);

  resize() {
    const start = performance.now();
    this.size.update((current) => 280 - current);
    afterNextRender({
      read: () => console.log('Phased', Math.round(performance.now() - start), 'ms'),
    }, { injector: this.injector });
  }

}
