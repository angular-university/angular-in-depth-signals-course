import { signal } from '@angular/core';

export class LessonsStore {

  lessons = ['Signals', 'Resources', 'Services'];

  #selected = signal(this.lessons[0]);

  selected = this.#selected.asReadonly();

  constructor(readonly id = 'default') {}

  select(lesson: string) {
    this.#selected.set(lesson);
  }

}
