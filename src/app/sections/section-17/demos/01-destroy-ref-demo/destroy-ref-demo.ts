import { Component, signal } from '@angular/core';
import { TickingCounter } from './ticking-counter';

@Component({
  selector: 'destroy-ref-demo',
  imports: [TickingCounter],
  templateUrl: './destroy-ref-demo.html',
})
export class DestroyRefDemo {

  shown = signal(true);

  toggle() {
    this.shown.update((current) => !current);
  }

}
