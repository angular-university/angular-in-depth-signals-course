import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { interval, map, pairwise } from 'rxjs';

@Component({
  selector: 'to-signal-demo',
  templateUrl: './to-signal-demo.html',
})
export class ToSignalDemo {

  ticks = toSignal(interval(1000), { initialValue: 0 });

  count = signal(0);

  previous = toSignal(
    toObservable(this.count).pipe(
      pairwise(),
      map(([previous]) => previous),
    ),
    { initialValue: 0 },
  );

  increment() {
    this.count.update((value) => value + 1);
  }

}
