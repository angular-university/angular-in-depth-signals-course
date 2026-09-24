import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'effect-cleanup-demo',
  templateUrl: './effect-cleanup-demo.html',
})
export class EffectCleanupDemo {

  running = signal(false);

  seconds = signal(0);

  constructor() {
    effect((onCleanup) => {
      if (!this.running()) {
        return;
      }
      const id = setInterval(() => this.tick(), 1000);
      onCleanup(() => clearInterval(id));
    });
  }

  start() {
    this.running.set(true);
  }

  stop() {
    this.running.set(false);
  }

  tick() {
    this.seconds.update((current) => current + 1);
  }

}
