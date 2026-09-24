import { Component, signal } from '@angular/core';
import { ThemedBox } from './themed-box';

@Component({
  selector: 'host-context-demo',
  imports: [ThemedBox],
  templateUrl: './host-context-demo.html',
})
export class HostContextDemo {

  light = signal(false);

  toggle() {
    this.light.update((current) => !current);
  }

}
