import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'icu-demo',
  templateUrl: './icu-demo.html',
})
export class IcuDemo {

  count = signal(1);

  role = signal('admin');

  summary = computed(() => $localize`:Summary of the item count@@itemSummary:Showing ${this.count()}:count: items`);

  increment() {
    this.count.update((current) => current + 1);
  }

  decrement() {
    this.count.update((current) => Math.max(0, current - 1));
  }

  setRole(role: string) {
    this.role.set(role);
  }

}
