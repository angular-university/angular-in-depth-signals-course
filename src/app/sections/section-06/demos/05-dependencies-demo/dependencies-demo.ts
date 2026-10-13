import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'dependencies-demo',
  templateUrl: './dependencies-demo.html',
})
export class DependenciesDemo {

  enabled = signal(true);

  count = signal(0);

  value = computed(() => {
    console.log('value recomputed');
    const enabled = this.enabled();
    const count = this.count();
    if (enabled) {
      return count;
    } else {
      return 0;
    }
  });

  increment() {
    this.count.update((current) => current + 1);
  }

  toggle() {
    this.enabled.update((current) => !current);
  }

}
