import { Component, inject } from '@angular/core';
import { LessonsStore } from './lessons-store';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.html'
})
export class LessonsList {

  store = inject(LessonsStore);

  constructor() {
    console.log('list store id', this.store.id);
  }

  select(lesson: string) {
    this.store.select(lesson);
  }

}
