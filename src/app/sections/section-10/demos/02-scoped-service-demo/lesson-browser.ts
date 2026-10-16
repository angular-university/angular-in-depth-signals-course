import { Component, inject } from '@angular/core';
import { LessonsStore } from './lessons-store';
import { LessonsList } from './lessons-list';
import { LessonDetail } from './lesson-detail';

@Component({
  selector: 'lesson-browser',
  imports: [LessonsList, LessonDetail],
  providers: [LessonsStore],
  templateUrl: './lesson-browser.html',
})
export class LessonBrowser {

  store = inject(LessonsStore);

}
