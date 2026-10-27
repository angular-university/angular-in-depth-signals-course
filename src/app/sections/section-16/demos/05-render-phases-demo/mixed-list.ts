import { Component, Injector, afterNextRender, inject, signal } from '@angular/core';
import { MixedBox } from './mixed-box';

@Component({
  selector: 'mixed-list',
  imports: [MixedBox],
  templateUrl: './mixed-list.html',
})
export class MixedList {

  injector = inject(Injector);

  items = Array.from({ length: 500 }, (_, index) => `Box ${index + 1} with some wrapping text`);

  size = signal(120);

  resize() {
    const start = performance.now();
    this.size.update((current) => 280 - current);
    afterNextRender({
      read: () => console.log('Mixed', Math.round(performance.now() - start), 'ms'),
    }, { injector: this.injector });
  }

}
