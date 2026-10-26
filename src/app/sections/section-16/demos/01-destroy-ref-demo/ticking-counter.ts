import { Component, DestroyRef, inject, signal } from '@angular/core';

@Component({
  selector: 'ticking-counter',
  templateUrl: './ticking-counter.html',
})
export class TickingCounter {

  ticks = signal(0);

  constructor() {
    const id = setInterval(() => this.tick(), 1000);
    inject(DestroyRef).onDestroy(() => clearInterval(id));
  }

  tick() {
    this.ticks.update((current) => current + 1);
  }

}
