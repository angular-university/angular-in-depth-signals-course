import { Component, model } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.html',
})
export class Counter {

  count = model(0);

  addOne() {
    this.count.update((current) => current + 1);
  }

}
