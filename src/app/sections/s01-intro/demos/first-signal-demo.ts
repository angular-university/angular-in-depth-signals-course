import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../shared/mock-courses';

/**
 * Lesson 1.3: a signal is a value you read by calling it, and change with set() or update().
 */
@Component({
  selector: 'first-signal-demo',
  template: `
    <h4 class="demo-heading">{{ title() }}</h4>

    <p class="demo-label">Students enrolled</p>
    <p class="demo-counter demo-counter-featured">
      @for (value of [students()]; track value) {
        <span>{{ value }}</span>
      }
    </p>

    <div class="demo-actions">
      <button class="btn btn-primary" (click)="enrolOne()">Enrol one student</button>
      <button class="btn btn-ghost" (click)="reset()">Reset to 0</button>
      <button class="btn btn-ghost" (click)="flipTitle()">Flip the course name</button>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class FirstSignalDemo {

  // Starts on "In Depth"; flipping shows "For Beginners" — the two courses this
  // course's demos are drawn from.
  private readonly titles = [MOCK_COURSES[1].title, MOCK_COURSES[0].title] as const;

  title = signal<string>(this.titles[0]);

  students = signal(0);

  enrolOne() {
    // update() derives the next value from the current one
    this.students.update((current) => current + 1);
  }

  reset() {
    // set() replaces the value outright
    this.students.set(0);
  }

  flipTitle() {
    // update() derives the next value from the current one — here, the other name in the pair
    this.title.update((current) => (current === this.titles[0] ? this.titles[1] : this.titles[0]));
  }

}
