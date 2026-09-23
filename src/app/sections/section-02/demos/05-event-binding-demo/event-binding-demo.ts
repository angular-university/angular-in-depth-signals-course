import { Component, signal } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  templateUrl: './event-binding-demo.html',
})
export class EventBindingDemo {

  key = signal('');

  shortcut = signal('');

  width = signal(window.innerWidth);

  clicks = signal(0);

  onResize() {
    this.width.set(window.innerWidth);
  }

  onPageClick() {
    this.clicks.update((current) => current + 1);
  }

}
