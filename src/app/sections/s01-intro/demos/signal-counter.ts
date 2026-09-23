import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { START_TICKING_EVENT } from './start-ticking-event';

/**
 * The same counter, in a signal. The timer is still outside any template listener, but
 * changing a signal that the template reads is itself what tells Angular to re-render.
 */
@Component({
  selector: 'signal-counter',
  template: `
    <div class="demo-panel demo-panel-live">
      <h4 class="demo-heading">Signal</h4>
      <p class="demo-counter">
        @for (value of [count()]; track value) {
          <span>{{ value }}</span>
        }
      </p>
      <p class="demo-note">
        Reading a signal in the template is what connects this view to that piece of state.
      </p>
    </div>
  `,
  styleUrl: './demo-shared.scss',
})
export class SignalCounter implements OnInit, OnDestroy {

  count = signal(0);

  private timer: ReturnType<typeof setInterval> | undefined;

  private readonly start = () => {
    if (this.timer !== undefined) return;

    this.timer = setInterval(() => this.count.update((current) => current + 1), 1000);
  };

  ngOnInit() {
    document.addEventListener(START_TICKING_EVENT, this.start);
  }

  ngOnDestroy() {
    document.removeEventListener(START_TICKING_EVENT, this.start);
    clearInterval(this.timer);
  }

}
