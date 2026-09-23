import { Component, OnDestroy, OnInit } from '@angular/core';
import { START_TICKING_EVENT } from './start-ticking-event';

/**
 * A counter kept in a plain property and incremented from a timer — that is, from outside
 * any template listener. Nothing notifies Angular, so the view never updates.
 */
@Component({
  selector: 'plain-counter',
  template: `
    <div class="demo-panel">
      <h4 class="demo-heading">Plain property</h4>
      <p class="demo-counter">
        @for (value of [count]; track value) {
          <span>{{ value }}</span>
        }
      </p>
      <p class="demo-note">
        The value really is going up — watch the console. The view never hears about it.
      </p>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class PlainCounter implements OnInit, OnDestroy {

  count = 0;

  private timer: ReturnType<typeof setInterval> | undefined;

  private readonly start = () => {
    if (this.timer !== undefined) return;

    this.timer = setInterval(() => {
      this.count++;
      console.log(`plain count is now ${this.count}, but the view still shows 0`);
    }, 1000);
  };

  ngOnInit() {
    document.addEventListener(START_TICKING_EVENT, this.start);
  }

  ngOnDestroy() {
    document.removeEventListener(START_TICKING_EVENT, this.start);
    clearInterval(this.timer);
  }

}
