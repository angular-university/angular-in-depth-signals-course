import { Injectable, signal } from '@angular/core';

@Injectable()
export class LessonsStore {

  lessons = ['Signals', 'Resources', 'Services'];

  #selected = signal(this.lessons[0]);

  selected = this.#selected.asReadonly();

  select(lesson: string) {
    this.#selected.set(lesson);
  }

}
