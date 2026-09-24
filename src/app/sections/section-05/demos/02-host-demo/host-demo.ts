import { Component, signal } from '@angular/core';
import { PaddedBox } from './padded-box';
import { HostBox } from './host-box';

@Component({
  selector: 'host-demo',
  imports: [PaddedBox, HostBox],
  templateUrl: './host-demo.html',
})
export class HostDemo {

  active = signal(false);

  toggle() {
    this.active.update((current) => !current);
  }

}
