import { Component, signal } from '@angular/core';
import { CollapsibleText } from './collapsible-text';
import {Collapsible} from '../01-collapsible-demo/collapsible';

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
