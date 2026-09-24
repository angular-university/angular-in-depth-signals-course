import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'linked-signal-demo',
  templateUrl: './linked-signal-demo.html',
})
export class LinkedSignalDemo {

  count = signal(0);

  doubled = linkedSignal(() => this.count() * 2);

  increment() {
    this.count.update((current) => current + 1);
  }

  setDoubled(value: number) {
    this.doubled.set(value);
  }

}
