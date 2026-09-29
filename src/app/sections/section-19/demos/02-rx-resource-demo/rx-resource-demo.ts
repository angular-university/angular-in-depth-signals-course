import { Component, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { interval, map } from 'rxjs';

@Component({
  selector: 'rx-resource-demo',
  templateUrl: './rx-resource-demo.html',
})
export class RxResourceDemo {

  step = signal(1);

  multiples = rxResource({
    params: () => this.step(),
    stream: ({ params }) => interval(1000).pipe(map((tick) => (tick + 1) * params)),
  });

  next() {
    this.step.update((value) => value + 1);
  }

}
