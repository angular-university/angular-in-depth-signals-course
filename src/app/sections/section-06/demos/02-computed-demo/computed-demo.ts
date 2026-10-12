import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'computed-demo',
  templateUrl: './computed-demo.html',
})
export class ComputedDemo {

  a = signal(0);

  b = signal(0);

  sum = computed(() => this.a() + this.b());

  incrementA() {
    this.a.update((current) => current + 1);
  }

  incrementB() {
    this.b.update((current) => current + 1);
  }

}
