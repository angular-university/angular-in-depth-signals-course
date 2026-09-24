import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Course } from '../../../../model/course';

@Component({
  selector: 'http-resource-demo',
  templateUrl: './http-resource-demo.html',
})
export class HttpResourceDemo {

  id = signal(1);

  course = httpResource<Course>(() => `/api/courses/${this.id()}`);

  next() {
    this.id.update((current) => current + 1);
  }

}
