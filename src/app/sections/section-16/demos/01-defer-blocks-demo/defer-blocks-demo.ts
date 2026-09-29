import { Component, signal } from '@angular/core';
import { DeferredPanel } from './deferred-panel';

@Component({
  selector: 'defer-blocks-demo',
  imports: [DeferredPanel],
  templateUrl: './defer-blocks-demo.html',
})
export class DeferBlocksDemo {

  shown = signal(false);

  show() {
    this.shown.set(true);
  }

}
