import { Component } from '@angular/core';
import { CourseCard } from './demos/course-card';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

@Component({
  selector: 's01-intro',
  imports: [CourseCard, FirstSignalDemo, NotASignalDemo],
  templateUrl: './s01-intro.html',
})
export class S01Intro {

}
