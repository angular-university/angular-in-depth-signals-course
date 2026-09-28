import { Component, debounced, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course } from '../../../../model/course';

@Component({
  selector: 'debounced-demo',
  templateUrl: './debounced-demo.html',
})
export class DebouncedDemo {

  query = signal('');

  debouncedQuery = debounced(this.query, 500);

  courses = httpResource<Course[]>(() => this.searchRequest());

  searchRequest() {
    const q = this.debouncedQuery.value();
    if (!q) {
      return undefined;
    }
    return { url: '/api/courses', params: { q } };
  }

  setQuery(query: string) {
    this.query.set(query);
  }

}
