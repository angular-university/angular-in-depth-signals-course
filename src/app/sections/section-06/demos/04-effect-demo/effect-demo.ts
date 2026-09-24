import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'effect-demo',
  templateUrl: './effect-demo.html',
})
export class EffectDemo {

  count = signal(0);

  constructor() {
    effect(() => {
      document.title = `Count: ${this.count()}`;
    });
  }

  increment() {
    this.count.update((current) => current + 1);
  }

}
