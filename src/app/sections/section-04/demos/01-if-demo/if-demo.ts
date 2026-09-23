import { Component, signal } from '@angular/core';

@Component({
  selector: 'if-demo',
  templateUrl: './if-demo.html',
})
export class IfDemo {

  count = signal(0);

  increment() {
    this.count.update((current) => current + 1);
  }

  reset() {
    this.count.set(0);
  }

}
