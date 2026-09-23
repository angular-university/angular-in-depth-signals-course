import { Component, signal } from '@angular/core';

@Component({
  selector: 'first-signal-demo',
  templateUrl: './first-signal-demo.html',
})
export class FirstSignalDemo {

  students = signal(0);

  enrolOne() {
    this.students.update((current) => current + 1);
  }

  reset() {
    this.students.set(0);
  }

}
