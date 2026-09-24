import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'effect-demo',
  templateUrl: './effect-demo.html',
})
export class EffectDemo {

  count = signal(0);

  source = signal(0);

  doubled = signal(0);

  constructor() {
    effect(() => {
      console.log(`count is now ${this.count()}`);
    });

    effect(() => {
      this.doubled.set(this.source() * 2);
    });
  }

  increment() {
    this.count.update((current) => current + 1);
  }

  incrementSource() {
    this.source.update((current) => current + 1);
    console.log(`source is ${this.source()}, doubled is still ${this.doubled()}`);
  }

}
