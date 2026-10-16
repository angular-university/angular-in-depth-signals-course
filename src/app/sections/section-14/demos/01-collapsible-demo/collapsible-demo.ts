import { Component, signal } from '@angular/core';
import { Collapsible } from './collapsible';

@Component({
  selector: 'collapsible-demo',
  imports: [Collapsible],
  templateUrl: './collapsible-demo.html',
})
export class CollapsibleDemo {

  lastToggle = signal('');

  setLastToggle(toggle: string) {
    this.lastToggle.set(toggle);
  }

}
