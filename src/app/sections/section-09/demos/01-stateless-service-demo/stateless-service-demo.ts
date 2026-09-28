import { Component, inject } from '@angular/core';
import { CoursesService } from './courses-service';

@Component({
  selector: 'stateless-service-demo',
  templateUrl: './stateless-service-demo.html',
})
export class StatelessServiceDemo {

  coursesService = inject(CoursesService);

  course = this.coursesService.courseResource(1);

  async save(title: string) {
    await this.coursesService.saveCourse(1, title);
    this.course.reload();
  }

}
