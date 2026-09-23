import { Component, signal } from '@angular/core';

@Component({
  selector: 'if-demo',
  templateUrl: './if-demo.html',
})
export class IfDemo {

  visible = signal(true);

  count = signal(0);

  data = signal<{ title: string } | null>(null);

  toggleVisible() {
    this.visible.update((current) => !current);
  }

  increment() {
    this.count.update((current) => current + 1);
  }

  reset() {
    this.count.set(0);
  }

  toggleData() {
    if (this.data()) {
      this.data.set(null);
      return;
    }

    this.data.set({ title: 'Angular In Depth' });
  }

}
