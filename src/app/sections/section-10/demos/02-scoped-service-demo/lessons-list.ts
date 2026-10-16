import { Component, inject } from '@angular/core';
import { LessonsStore } from './lessons-store';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.html',
})
export class LessonsList {

  store = inject(LessonsStore);

  select(lesson: string) {
    this.store.select(lesson);
  }

}
