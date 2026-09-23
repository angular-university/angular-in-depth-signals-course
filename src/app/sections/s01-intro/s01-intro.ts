import { Component } from '@angular/core';
import { CourseCard } from './demos/01-course-card/course-card';
import { FirstSignalDemo } from './demos/02-first-signal-demo/first-signal-demo';
import { NotASignalDemo } from './demos/03-not-a-signal-demo/not-a-signal-demo';

@Component({
  selector: 's01-intro',
  imports: [CourseCard, FirstSignalDemo, NotASignalDemo],
  templateUrl: './s01-intro.html',
})
export class S01Intro {

}
