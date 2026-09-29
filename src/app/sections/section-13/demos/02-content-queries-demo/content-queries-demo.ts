import { Component, signal } from '@angular/core';
import { ItemList } from './item-list';
import { ListItem } from './list-item';

@Component({
  selector: 'content-queries-demo',
  imports: [ItemList, ListItem],
  templateUrl: './content-queries-demo.html',
})
export class ContentQueriesDemo {

  labels = signal(['Item 1', 'Item 2']);

  add() {
    this.labels.update((labels) => [...labels, `Item ${labels.length + 1}`]);
  }

  remove() {
    this.labels.update((labels) => labels.slice(0, -1));
  }

}
