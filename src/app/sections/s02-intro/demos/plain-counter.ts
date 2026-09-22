import { Component, OnDestroy } from '@angular/core';

/**
 * A counter kept in a plain property and incremented from a timer — that is, from outside
 * any template listener. Nothing notifies Angular, so the view never updates.
 */
@Component({
  selector: 'plain-counter',
  template: `
    <div class="demo-panel">
      <h4 class="demo-heading">Plain property</h4>
      <p class="demo-counter">{{ count }}</p>
      <button class="btn btn-ghost" [disabled]="timer !== undefined" (click)="start()">
        Start ticking
      </button>
      <p class="demo-note">
        The value really is going up — watch the console. The view never hears about it.
      </p>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class PlainCounter implements OnDestroy {

  count = 0;

  protected timer: ReturnType<typeof setInterval> | undefined;

  start() {
    this.timer = setInterval(() => {
      this.count++;
      console.log(`plain count is now ${this.count}, but the view still shows 0`);
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
