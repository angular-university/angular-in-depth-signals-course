import { Component, signal } from '@angular/core';

@Component({
  selector: 'first-signal-demo',
  templateUrl: './first-signal-demo.html',
})
export class FirstSignalDemo {

  private readonly titles = [
    'Angular In Depth (Signals Edition)',
    'Angular For Beginners (Signals Edition)',
  ] as const;

  title = signal<string>(this.titles[0]);

  students = signal(0);

  enrolOne() {
    this.students.update((current) => current + 1);
  }

  reset() {
    this.students.set(0);
  }

  flipTitle() {
    this.title.update((current) => (current === this.titles[0] ? this.titles[1] : this.titles[0]));
  }

}
