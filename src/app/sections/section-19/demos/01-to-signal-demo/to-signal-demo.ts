import { Component, signal } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'to-signal-demo',
  imports: [AsyncPipe],
  templateUrl: './to-signal-demo.html',
})
export class ToSignalDemo {

  seconds$ = interval(1000);

  seconds = toSignal(this.seconds$, { initialValue: 0 });

  count = signal(0);

  count$ = toObservable(this.count);

  increment() {
    this.count.update((current) => current + 1);
  }

}
