import { Component, signal } from '@angular/core';
import { Collapsible } from './collapsible';

@Component({
  selector: 'collapsible-demo',
  imports: [Collapsible],
  templateUrl: './collapsible-demo.html',
})
export class CollapsibleDemo {

  event = signal('');

  setEvent(event: string) {
    this.event.set(event);
  }

}
