import { Component } from '@angular/core';
import { PlainCounter } from './plain-counter';
import { SignalCounter } from './signal-counter';

/**
 * Lesson 1.4: the same counter twice, in two separate components, both incremented by a
 * timer. Only the signal-backed one updates on screen.
 *
 * Two details that matter, and that a naive version of this demo gets wrong:
 *
 *  - The timer is deliberate. If the counter were incremented from a (click) handler both
 *    versions would update, because a bound template listener is itself one of the things
 *    that tells Angular to re-render.
 *  - The two counters live in separate components on purpose. If they shared one component,
 *    re-rendering it for the signal would re-read the plain property too, and both would
 *    appear to work.
 */
@Component({
  selector: 'not-a-signal-demo',
  imports: [PlainCounter, SignalCounter],
  template: `
    <div class="demo-split">
      <plain-counter />
      <signal-counter />
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class NotASignalDemo {

}
