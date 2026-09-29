import { Component, signal } from '@angular/core';
import { CollapsibleText } from './collapsible-text';

@Component({
  selector: 'host-directives-demo',
  imports: [CollapsibleText],
  templateUrl: './host-directives-demo.html',
})
export class HostDirectivesDemo {

  lastToggle = signal('');

  setLastToggle(toggle: string) {
    this.lastToggle.set(toggle);
  }

}
