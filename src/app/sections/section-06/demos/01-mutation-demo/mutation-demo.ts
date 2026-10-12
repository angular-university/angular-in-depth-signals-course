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
    this.items.update(val => [...val, 'Item']);
  }


  data = signal({ count: 0 });

  increment() {
    this.data.update(val => ({...val, count: val.count + 1}));
  }

}








// this.data.update((data) => ({ ...data, count: data.count + 1 }));
