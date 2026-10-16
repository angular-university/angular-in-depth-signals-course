import { Component, inject } from '@angular/core';
import { LessonsStore } from './lessons-store';

@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.html',
})
export class LessonDetail {

  store = inject(LessonsStore);

  back() {
    this.store.back();
  }

}
