import { Component } from '@angular/core';
import { CourseCard } from './demos/course-card';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

/**
 * Plain markup styled from the shared classes in styles.scss, not wrapper components —
 * a beginner reading this file should see only what Section 1 is actually teaching, not
 * an unexplained <ng-content> from a lesson still ten sections away.
 */
@Component({
  selector: 's01-intro',
  imports: [CourseCard, FirstSignalDemo, NotASignalDemo],
  template: `
    <section class="section" id="s1">
      <div class="page-container">

        <header class="section-head">
          <span class="section-number">1</span>
          <h2 class="section-title">Introduction to Angular, with Signals From the Beginning</h2>
        </header>

        <div class="section-demos">

          <section class="demo-block">
            <header class="demo-header">
              <h3 class="demo-title">Our first component — a course card</h3>
            </header>
            <div class="demo-body">
              <course-card />
            </div>
          </section>

          <section class="demo-block">
            <header class="demo-header">
              <h3 class="demo-title">Our first signal — set() and update()</h3>
            </header>
            <div class="demo-body">
              <first-signal-demo />
            </div>
          </section>

          <section class="demo-block">
            <header class="demo-header">
              <h3 class="demo-title">What happens when data is not in a signal</h3>
            </header>
            <div class="demo-body">
              <not-a-signal-demo />
            </div>
          </section>

        </div>

      </div>
    </section>
  `,
})
export class S01Intro {

}
