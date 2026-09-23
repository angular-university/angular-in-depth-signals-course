import { Component, signal } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  templateUrl: './event-binding-demo.html',
  styleUrl: './event-binding-demo.scss',
})
export class EventBindingDemo {

  pointer = signal({ x: 0, y: 0 });

  lastKey = signal('none yet');

  lastShortcut = signal('none yet');

  windowWidth = signal(window.innerWidth);

  pageClicks = signal(0);

  onResize() {
    this.windowWidth.set(window.innerWidth);
  }

}
