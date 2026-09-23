import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'property-vs-attribute-demo',
  templateUrl: './property-vs-attribute-demo.html',
})
export class PropertyVsAttributeDemo {

  course = signal(MOCK_COURSES[0]);

  nextCourse() {
    this.course.update((current) => {
      const next = (MOCK_COURSES.indexOf(current) + 1) % MOCK_COURSES.length;
      return MOCK_COURSES[next];
    });
  }

}
