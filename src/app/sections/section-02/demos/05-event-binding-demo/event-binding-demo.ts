import { Component, signal } from '@angular/core';

@Component({
  selector: 'event-binding-demo',
  templateUrl: './event-binding-demo.html',
})
export class EventBindingDemo {

  lastEvent = signal('none yet');

  show(event: string) {
    this.lastEvent.set(event);
  }

}
