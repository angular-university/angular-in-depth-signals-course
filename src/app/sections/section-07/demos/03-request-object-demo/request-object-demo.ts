import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course } from '../../../../model/course';

@Component({
  selector: 'request-object-demo',
  templateUrl: './request-object-demo.html',
})
export class RequestObjectDemo {

  query = signal('Angular');

  results = httpResource<Course[]>(() => ({
    url: '/api/courses/search',
    method: 'POST',
    body: { query: this.query() },
  }));

  total = httpResource(() => '/api/courses', {
    parse: (response) => this.countCourses(response),
  });

  search(query: string) {
    this.query.set(query);
  }

  countCourses(response: unknown): number {
    if (!Array.isArray(response)) {
      throw new Error('Expected an array');
    }
    return response.length;
  }

  reload() {
    this.total.reload();
  }

}
