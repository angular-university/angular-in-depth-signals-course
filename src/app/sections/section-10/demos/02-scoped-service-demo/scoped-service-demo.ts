import { Component, inject } from '@angular/core';
import { LessonsStore } from './lessons-store';
import { LessonsList } from './lessons-list';
import { LessonDetail } from './lesson-detail';

@Component({
  selector: 'scoped-service-demo',
  imports: [LessonsList, LessonDetail],
  providers: [
    LessonsStore
  ],
  templateUrl: './scoped-service-demo.html',
})
export class ScopedServiceDemo {

  lessonsStore = inject(LessonsStore);

  constructor() {
    console.log('parent store id', this.lessonsStore.id);
  }

}
