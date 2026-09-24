import { Component, linkedSignal, signal } from '@angular/core';

const FIRST_OPTIONS = ['A', 'B', 'C'];

const SECOND_OPTIONS = ['B', 'C', 'D'];

@Component({
  selector: 'linked-signal-demo',
  templateUrl: './linked-signal-demo.html',
})
export class LinkedSignalDemo {

  options = signal(FIRST_OPTIONS);

  selected = linkedSignal(() => this.options()[0]);

  kept = linkedSignal<string[], string>({
    source: this.options,
    computation: (options, previous) => {
      if (previous && options.includes(previous.value)) {
        return previous.value;
      }
      return options[0];
    },
  });

  select(option: string) {
    this.selected.set(option);
  }

  selectKept(option: string) {
    this.kept.set(option);
  }

  replaceOptions() {
    if (this.options() === FIRST_OPTIONS) {
      this.options.set(SECOND_OPTIONS);
      return;
    }
    this.options.set(FIRST_OPTIONS);
  }

}
