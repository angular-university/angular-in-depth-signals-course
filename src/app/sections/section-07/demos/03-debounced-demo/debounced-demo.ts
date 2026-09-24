import { Component, debounced, signal } from '@angular/core';

@Component({
  selector: 'debounced-demo',
  templateUrl: './debounced-demo.html',
})
export class DebouncedDemo {

  query = signal('');

  debouncedQuery = debounced(this.query, 500);

  setQuery(query: string) {
    this.query.set(query);
  }

}
