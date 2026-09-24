import { Component, signal } from '@angular/core';
import { HostBox } from './host-box';

@Component({
  selector: 'host-demo',
  imports: [HostBox],
  templateUrl: './host-demo.html',
})
export class HostDemo {

  active = signal(false);

  toggle() {
    this.active.update((current) => !current);
  }

}
