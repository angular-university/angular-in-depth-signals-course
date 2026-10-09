import { Component, signal } from '@angular/core';
import { ItemCount } from './item-count';

@Component({
  selector: 'mutation-demo',
  imports: [ItemCount],
  templateUrl: './mutation-demo.html',
})
export class MutationDemo {

  items = signal<string[]>([]);

  add() {
    this.items().push('item');
    // this.items.update((items) => [...items, 'item']);
  }

}
