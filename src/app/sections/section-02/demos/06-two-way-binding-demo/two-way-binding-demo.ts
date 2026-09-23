import { Component, signal } from '@angular/core';
import { Counter } from './counter';

@Component({
  selector: 'two-way-binding-demo',
  imports: [Counter],
  templateUrl: './two-way-binding-demo.html',
})
export class TwoWayBindingDemo {

  count = signal(0);

  reset() {
    this.count.set(0);
  }

}
