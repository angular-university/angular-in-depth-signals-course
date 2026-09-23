import { Component, signal } from '@angular/core';

interface Item {
  id: number;
  label: string;
}

function createItems(count: number): Item[] {
  return Array.from({ length: count }, (_, index) => createItem(index + 1));
}

function createItem(id: number): Item {
  return { id, label: `Item ${id}` };
}

function nextId(items: Item[]) {
  return Math.max(0, ...items.map((item) => item.id)) + 1;
}

@Component({
  selector: 'for-demo',
  templateUrl: './for-demo.html',
})
export class ForDemo {

  items = signal<Item[]>([]);

  variables = signal(createItems(6));

  tracked = signal(createItems(3));

  add() {
    this.items.update((current) => [...current, createItem(nextId(current))]);
  }

  remove() {
    this.items.update((current) => current.slice(0, -1));
  }

  addVariable() {
    this.variables.update((current) => [...current, createItem(nextId(current))]);
  }

  removeVariable() {
    this.variables.update((current) => current.slice(0, -1));
  }

  prepend() {
    this.tracked.update((current) => [createItem(nextId(current)), ...current]);
  }

}
