import { Component, signal } from '@angular/core';
import { WhenPanel } from './when-panel';

@Component({
  selector: 'when-prefetch-demo',
  imports: [WhenPanel],
  templateUrl: './when-prefetch-demo.html',
})
export class WhenPrefetchDemo {

  loaded = signal(false);

  shown = signal(false);

  load() {
    this.loaded.set(true);
  }

  unload() {
    this.loaded.set(false);
  }

  show() {
    this.shown.set(true);
  }

  hide() {
    this.shown.set(false);
  }

}
