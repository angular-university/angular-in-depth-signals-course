import { Component } from '@angular/core';
import { LessonsStore } from './lessons-store';
import { LessonsList } from './lessons-list';
import { LessonDetail } from './lesson-detail';

@Component({
  selector: 'scoped-service-demo',
  imports: [LessonsList, LessonDetail],
  providers: [{ provide: LessonsStore, useFactory: () => new LessonsStore('parent') }],
  templateUrl: './scoped-service-demo.html',
})
export class ScopedServiceDemo {

}
