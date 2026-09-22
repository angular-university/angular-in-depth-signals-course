import { Component, OnDestroy, signal } from '@angular/core';

/**
 * The same counter, in a signal. The timer is still outside any template listener, but
 * changing a signal that the template reads is itself what tells Angular to re-render.
 */
@Component({
  selector: 'signal-counter',
  template: `
    <div class="demo-panel">
      <h4 class="demo-heading">Signal</h4>
      <p class="demo-counter">
        @for (value of [count()]; track value) {
          <span>{{ value }}</span>
        }
      </p>
      <button class="btn btn-primary" [disabled]="timer !== undefined" (click)="start()">
        Start ticking
      </button>
      <p class="demo-note">
        Reading a signal in the template is what connects this view to that piece of state.
      </p>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class SignalCounter implements OnDestroy {

  count = signal(0);

  protected timer: ReturnType<typeof setInterval> | undefined;

  start() {
    this.timer = setInterval(() => this.count.update((current) => current + 1), 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }

}
