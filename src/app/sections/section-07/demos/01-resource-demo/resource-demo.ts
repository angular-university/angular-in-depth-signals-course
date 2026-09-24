import { Component, resource, signal } from '@angular/core';
import { Course } from '../../../../model/course';

@Component({
  selector: 'resource-demo',
  templateUrl: './resource-demo.html',
})
export class ResourceDemo {

  id = signal(1);

  course = resource({
    params: () => ({ id: this.id() }),
    loader: ({ params }) => this.loadCourse(params.id),
  });

  async loadCourse(id: number): Promise<Course> {
    const response = await fetch(`/api/courses/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  }

  next() {
    this.id.update((current) => current + 1);
  }

  reload() {
    this.course.reload();
  }

}
