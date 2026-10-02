import { Component, signal } from '@angular/core';

@Component({
  selector: 'first-signal-demo',
  templateUrl: './first-signal-demo.html',
})
export class FirstSignalDemo {

  students = signal(0);

  async enrolOne() {
    this.students.update(val => val + 1);
  }

  reset() {
    this.students.set(0);
  }

}
