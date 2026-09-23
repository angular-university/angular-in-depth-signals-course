import { Component } from '@angular/core';
import { CourseCard } from './demos/01-course-card/course-card';
import { FirstSignalDemo } from './demos/02-first-signal-demo/first-signal-demo';
import { NotASignalDemo } from './demos/03-not-a-signal-demo/not-a-signal-demo';

@Component({
  selector: 'section-01',
  imports: [CourseCard, FirstSignalDemo, NotASignalDemo],
  templateUrl: './section-01.html',
})
export class Section01 {

}
