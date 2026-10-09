import { Component, signal } from '@angular/core';
import { ItemCount } from './item-count';
import { DataCount } from './data-count';

@Component({
  selector: 'mutation-demo',
  imports: [ItemCount, DataCount],
  templateUrl: './mutation-demo.html',
})
export class MutationDemo {

  items = signal<string[]>([]);

  add() {
    this.items().push('item');
  }








  data = signal({ count: 0 });

  increment() {
    this.data().count++;
    // this.data.update((data) => ({ ...data, count: data.count + 1 }));
  }

}
