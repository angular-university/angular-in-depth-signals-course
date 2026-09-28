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

  courses = httpResource<Course[]>(() => ({
    url: '/api/courses',
    params: { search: this.debouncedQuery.value() },
  }));

  setQuery(query: string) {
    this.query.set(query);
  }

}
