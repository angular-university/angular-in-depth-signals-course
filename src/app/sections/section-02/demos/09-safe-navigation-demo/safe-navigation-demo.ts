import { Component, signal } from '@angular/core';
import { Course } from '../../../../model/course';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'safe-navigation-demo',
  templateUrl: './safe-navigation-demo.html',
})
export class SafeNavigationDemo {

  selected = signal<Course | null>(null);

  select() {
    this.selected.set(MOCK_COURSES[1]);
  }

  findCourse(id: number) {
    return MOCK_COURSES.find((course) => course.id === id);
  }

}
