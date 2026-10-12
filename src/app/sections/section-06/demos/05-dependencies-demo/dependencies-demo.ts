import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'dependencies-demo',
  templateUrl: './dependencies-demo.html',
})
export class DependenciesDemo {

  enabled = signal(true);

  count = signal(0);

  value = computed(() => {
    console.log('value recomputed');
    if (!this.enabled()) {
      return 0;
    }
    return this.count();
  });

  asyncCount = signal(0);

  constructor() {
    effect(async () => {
      await Promise.resolve();
      console.log(`asyncCount is ${this.asyncCount()}`);
    });
  }

  increment() {
    this.count.update((current) => current + 1);
  }

  toggle() {
    this.enabled.update((current) => !current);
  }

  incrementAsync() {
    this.asyncCount.update((current) => current + 1);
  }

}
