import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { Course } from '../../../../model/course';

@Component({
  selector: 'rx-resource-demo',
  templateUrl: './rx-resource-demo.html',
})
export class RxResourceDemo {

  http = inject(HttpClient);

  id = signal(1);

  course = rxResource({
    params: () => this.id(),
    stream: ({ params }) => this.http.get<Course>(`/api/courses/${params}`),
  });

  next() {
    this.id.update((current) => current + 1);
  }

  reload() {
    this.course.reload();
  }

}
