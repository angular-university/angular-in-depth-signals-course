import {Component, computed, effect, signal} from '@angular/core';

@Component({
  selector: 'effect-demo',
  templateUrl: './effect-demo.html',
})
export class EffectDemo {

  authToken = signal('');

  constructor() {

    this.authToken.set(localStorage.getItem('authToken') ?? '');

    effect(() => {
      localStorage.setItem('authToken', this.authToken());
    });

    effect(() => {
      console.log(`count is now ${this.count()}`);
    });

    effect(() => {
      this.doubled.set(this.source() * 2);
    });

  }

  count = signal(0);

  increment() {
    this.count.update((current) => current + 1);
  }

  source = signal(0);

  doubled = signal(0);

  doubledComputed = computed(() => this.source() * 2)

  incrementSource() {
    this.source.update((current) => current + 1);
    console.log(`source is ${this.source()}, doubled is still ${this.doubled()} doubledComputed: ${this.doubledComputed()}`);
  }

}










/*



 */
