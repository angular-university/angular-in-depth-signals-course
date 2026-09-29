import { Component } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';

@Component({
  selector: 'rx-resource-demo',
  templateUrl: './rx-resource-demo.html',
})
export class RxResourceDemo {

  seconds = rxResource({
    stream: () => interval(1000),
  });

  reload() {
    this.seconds.reload();
  }

}
