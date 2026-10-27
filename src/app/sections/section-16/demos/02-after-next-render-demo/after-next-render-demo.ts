import { Component, signal } from '@angular/core';
import { FocusedInput } from './focused-input';
import { ScrolledList } from './scrolled-list';

@Component({
  selector: 'after-next-render-demo',
  imports: [FocusedInput, ScrolledList],
  templateUrl: './after-next-render-demo.html',
})
export class AfterNextRenderDemo {

  inputShown = signal(false);

  listShown = signal(false);

  toggleInput() {
    this.inputShown.update((current) => !current);
  }

  toggleList() {
    this.listShown.update((current) => !current);
  }

}
