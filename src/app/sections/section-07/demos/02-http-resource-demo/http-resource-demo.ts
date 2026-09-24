import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course } from '../../../../model/course';

@Component({
  selector: 'http-resource-demo',
  templateUrl: './http-resource-demo.html',
})
export class HttpResourceDemo {

  id = signal(1);

  course = httpResource(() => `/api/courses/${this.id()}`, {
    parse: (response) => this.parseCourse(response),
  });

  parseCourse(response: unknown): Course {
    const course = response as Course;
    if (typeof course.title !== 'string') {
      throw new Error('Invalid course');
    }
    return course;
  }

  next() {
    this.id.update((current) => current + 1);
  }

}
