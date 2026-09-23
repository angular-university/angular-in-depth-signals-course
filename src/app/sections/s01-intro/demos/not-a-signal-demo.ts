import { Component } from '@angular/core';
import { PlainCounter } from './plain-counter';
import { SignalCounter } from './signal-counter';
import { START_TICKING_EVENT } from './start-ticking-event';

/**
 * Lesson 1.4: the same counter twice, in two separate components, both started by the
 * same click and both incremented by a timer. Only the signal-backed one updates on screen.
 *
 * Three details that matter, and that a naive version of this demo gets wrong:
 *
 *  - The timer is deliberate. If the counter were incremented from a (click) handler both
 *    versions would update, because a bound template listener is itself one of the things
 *    that tells Angular to re-render.
 *  - The two counters live in separate components on purpose. If they shared one component,
 *    re-rendering it for the signal would re-read the plain property too, and both would
 *    appear to work.
 *  - One button has to start both, so the comparison is fair — the same click, the same
 *    instant. It reaches the two siblings through a plain DOM event on document rather
 *    than an Angular input, output or query, none of which the course has taught yet.
 */
@Component({
  selector: 'not-a-signal-demo',
  imports: [PlainCounter, SignalCounter],
  template: `
    <div class="demo-actions">
      <button class="btn btn-primary" [disabled]="started" (click)="start()">
        Start ticking
      </button>
    </div>

    <div class="demo-split">
      <plain-counter />
      <signal-counter />
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class NotASignalDemo {

  protected started = false;

  start() {
    this.started = true;
    document.dispatchEvent(new CustomEvent(START_TICKING_EVENT));
  }

}
