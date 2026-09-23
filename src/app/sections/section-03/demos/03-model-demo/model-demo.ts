import { Component, signal } from '@angular/core';
import { Counter } from './counter';

@Component({
  selector: 'model-demo',
  imports: [Counter],
  templateUrl: './model-demo.html',
})
export class ModelDemo {

  count = signal(0);

  addTen() {
    this.count.update((current) => current + 10);
  }

}
