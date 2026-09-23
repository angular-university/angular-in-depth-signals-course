import { Component } from '@angular/core';
import { PlainCounter } from './plain-counter';
import { SignalCounter } from './signal-counter';

@Component({
  selector: 'not-a-signal-demo',
  imports: [PlainCounter, SignalCounter],
  templateUrl: './not-a-signal-demo.html',
})
export class NotASignalDemo {

  protected started = false;

  start(plain: PlainCounter, signal: SignalCounter) {
    plain.start();
    signal.start();
    this.started = true;
  }

}
