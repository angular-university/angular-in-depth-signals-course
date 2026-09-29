import { Component, signal } from '@angular/core';
import { FragileValue } from './fragile-value';

@Component({
  selector: 'boundary-demo',
  imports: [FragileValue],
  templateUrl: './boundary-demo.html',
})
export class BoundaryDemo {

  count = signal(0);

  increment() {
    this.count.update((current) => current + 1);
  }

  retry(reset: () => void) {
    this.count.set(0);
    reset();
  }

}
