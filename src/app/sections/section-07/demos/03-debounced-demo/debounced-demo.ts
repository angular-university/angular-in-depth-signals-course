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

  courses = httpResource<Course[]>(() => {
    const search = this.debouncedQuery.value();
    if (search.length < 3) {
      return;
    }
    return { url: '/api/courses', params: { search } };
  });

  setQuery(query: string) {
    this.query.set(query);
  }

}
