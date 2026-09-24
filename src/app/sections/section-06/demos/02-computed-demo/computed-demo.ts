import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'computed-demo',
  templateUrl: './computed-demo.html',
})
export class ComputedDemo {

  count = signal(0);

  doubled = computed(() => this.count() * 2);

  increment() {
    this.count.update((current) => current + 1);
  }

  reset() {
    this.count.set(0);
  }

}
