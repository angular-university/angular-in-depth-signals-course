import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'let-demo',
  templateUrl: './let-demo.html',
})
export class LetDemo {

  courses = MOCK_COURSES;

  index = signal(1);

  seats = signal(1);

  nextCourse() {
    this.index.update((current) => (current + 1) % this.courses.length);
  }

}
