import { Component, resource, signal } from '@angular/core';
import { Course } from '../../../../model/course';

@Component({
  selector: 'cancellation-demo',
  templateUrl: './cancellation-demo.html',
})
export class CancellationDemo {

  id = signal(1);

  cancelled = signal(0);

  course = resource({
    params: () => ({ id: this.id() }),
    loader: ({ params, abortSignal }) => this.loadCourse(params.id, abortSignal),
  });

  async loadCourse(id: number, abortSignal: AbortSignal): Promise<Course> {
    abortSignal.addEventListener('abort', () => this.countCancelled());
    const response = await fetch(`/api/courses/${id}`, { signal: abortSignal });
    return response.json();
  }

  countCancelled() {
    this.cancelled.update((current) => current + 1);
  }

  next() {
    this.id.update((current) => current + 1);
  }

}
