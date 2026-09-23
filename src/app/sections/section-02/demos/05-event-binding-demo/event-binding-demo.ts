import { Component, signal } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  templateUrl: './event-binding-demo.html',
  styleUrl: './event-binding-demo.scss',
})
export class EventBindingDemo {

  clicks = signal(0);

  hovering = signal(false);

  level = signal('Beginner');

  key = signal('');

  submitted = signal('');

  shiftSubmitted = signal('');

  wPresses = signal(0);

  width = signal(window.innerWidth);

  pageClicks = signal(0);

  countClick() {
    this.clicks.update((current) => current + 1);
  }

  countPageClick() {
    this.pageClicks.update((current) => current + 1);
  }

  onResize() {
    this.width.set(window.innerWidth);
  }

}
