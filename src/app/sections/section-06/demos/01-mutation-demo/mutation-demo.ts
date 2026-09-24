import { Component, signal } from '@angular/core';
import { ItemCount } from './item-count';

@Component({
  selector: 'mutation-demo',
  imports: [ItemCount],
  templateUrl: './mutation-demo.html',
})
export class MutationDemo {

  pushed = signal<string[]>([]);

  updated = signal<string[]>([]);

  addPushed() {
    this.pushed().push('item');
  }

  addUpdated() {
    this.updated.update((items) => [...items, 'item']);
  }

}
