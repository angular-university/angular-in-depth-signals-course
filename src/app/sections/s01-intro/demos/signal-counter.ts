import { Component, signal } from '@angular/core';

@Component({
  selector: 'signal-counter',
  templateUrl: './signal-counter.html',
})
export class SignalCounter {

  count = signal(0);

  start() {
    setInterval(() => this.count.update((current) => current + 1), 1000);
  }

}
