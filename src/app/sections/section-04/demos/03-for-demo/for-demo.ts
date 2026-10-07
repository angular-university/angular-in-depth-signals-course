import { Component, signal } from '@angular/core';

@Component({
  selector: 'for-demo',
  templateUrl: './for-demo.html',
})
export class ForDemo {

  items = signal([
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
    { id: 6, label: 'Item 6' },
  ]);

  add() {
    const id = this.items().length + 1;
    this.items.update((items) => [...items, { id, label: `Item ${id}` }]);
  }

  remove() {
    this.items.update((items) => items.slice(0, -1));
  }

}
