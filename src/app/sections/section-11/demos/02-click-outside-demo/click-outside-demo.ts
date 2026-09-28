import { Component, signal } from '@angular/core';
import { ClickOutside } from './click-outside';

@Component({
  selector: 'click-outside-demo',
  imports: [ClickOutside],
  templateUrl: './click-outside-demo.html',
})
export class ClickOutsideDemo {

  count = signal(0);

  increment() {
    this.count.update((current) => current + 1);
  }

}
