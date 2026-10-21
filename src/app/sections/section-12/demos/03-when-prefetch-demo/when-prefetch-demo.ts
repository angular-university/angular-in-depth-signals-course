import { Component, signal } from '@angular/core';
import { DeferredPanel } from '../01-defer-blocks-demo/deferred-panel';

@Component({
  selector: 'when-prefetch-demo',
  imports: [DeferredPanel],
  templateUrl: './when-prefetch-demo.html',
})
export class WhenPrefetchDemo {

  shown = signal(false);

  show() {
    this.shown.set(true);
  }

  hide() {
    this.shown.set(false);
  }

}
