import { Component, computed, signal, untracked } from '@angular/core';

@Component({
  selector: 'untracked-demo',
  templateUrl: './untracked-demo.html',
})
export class UntrackedDemo {

  a = signal(0);

  b = signal(0);

  sum = computed(() => this.a() + untracked(this.b));

  incrementA() {
    this.a.update((current) => current + 1);
  }

  incrementB() {
    this.b.update((current) => current + 1);
  }

}
