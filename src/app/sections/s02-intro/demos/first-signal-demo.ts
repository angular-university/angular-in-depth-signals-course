import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../shared/mock-courses';

/**
 * Lesson 2.3: a signal is a value you read by calling it, and change with set() or update().
 */
@Component({
  selector: 'first-signal-demo',
  template: `
    <h4 class="demo-heading">{{ title() }}</h4>
    <p class="demo-meta">Students enrolled: {{ students() }}</p>

    <div class="demo-actions">
      <button class="btn btn-primary" (click)="enrolOne()">Enrol one student</button>
      <button class="btn btn-ghost" (click)="reset()">Reset to 0</button>
      <button class="btn btn-ghost" (click)="renameCourse()">Rename the course</button>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class FirstSignalDemo {

  title = signal(MOCK_COURSES[0].title);

  students = signal(0);

  enrolOne() {
    // update() derives the next value from the current one
    this.students.update((current) => current + 1);
  }

  reset() {
    // set() replaces the value outright
    this.students.set(0);
  }

  renameCourse() {
    this.title.set('Angular In Depth (Signals Edition)');
  }

}
