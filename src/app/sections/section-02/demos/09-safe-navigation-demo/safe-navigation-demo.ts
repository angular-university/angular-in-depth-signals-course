import { Component, signal } from '@angular/core';

@Component({
  selector: 'safe-navigation-demo',
  templateUrl: './safe-navigation-demo.html',
})
export class SafeNavigationDemo {

  selected = signal<{ title: string } | null>(null);

  select() {
    this.selected.set({ title: 'Angular In Depth (Signals Edition)' });
  }

  clear() {
    this.selected.set(null);
  }

}
