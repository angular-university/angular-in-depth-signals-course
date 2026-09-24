import { Component, signal } from '@angular/core';
import { PaddedBox } from './padded-box';
import { HostBox } from './host-box';
import { ThemedText } from './themed-text';
import { InnerText } from './inner-text';

@Component({
  selector: 'host-demo',
  imports: [PaddedBox, HostBox, ThemedText, InnerText],
  templateUrl: './host-demo.html',
  styleUrl: './host-demo.scss',
})
export class HostDemo {

  active = signal(false);

  light = signal(false);

  toggleActive() {
    this.active.update((current) => !current);
  }

  toggleLight() {
    this.light.update((current) => !current);
  }

}
