import { Service, signal } from '@angular/core';

@Service({ autoProvided: false })
export class LessonsStore {

  lessons = ['Signals', 'Resources', 'Services'];

  #selected = signal<string | undefined>(undefined);

  selected = this.#selected.asReadonly();

  #lastSelected = signal<string | undefined>(undefined);

  lastSelected = this.#lastSelected.asReadonly();

  select(lesson: string) {
    this.#selected.set(lesson);
    this.#lastSelected.set(lesson);
  }

  back() {
    this.#selected.set(undefined);
  }

}
