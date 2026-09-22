import { Component } from '@angular/core';
import { SectionPage } from '../../shared/section-page/section-page';
import { DemoBlock } from '../../shared/demo-block/demo-block';
import { CourseCard } from './demos/course-card';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

@Component({
  selector: 's01-intro',
  imports: [SectionPage, DemoBlock, CourseCard, FirstSignalDemo, NotASignalDemo],
  template: `
    <section-page [number]="1" heading="Introduction to Angular, with Signals From the Beginning">

      <demo-block heading="Our first component — a course card">
        <course-card />
      </demo-block>

      <demo-block heading="Our first signal — set() and update()">
        <first-signal-demo />
      </demo-block>

      <demo-block heading="What happens when data is not in a signal">
        <not-a-signal-demo />
      </demo-block>

    </section-page>
  `,
})
export class S01Intro {

}
