import { Component, ElementRef, afterEveryRender, afterNextRender, afterRenderEffect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'render-hooks-demo',
  templateUrl: './render-hooks-demo.html',
})
export class RenderHooksDemo {

  nextRuns = viewChild.required<ElementRef<HTMLElement>>('nextRuns');

  everyRuns = viewChild.required<ElementRef<HTMLElement>>('everyRuns');

  effectRuns = viewChild.required<ElementRef<HTMLElement>>('effectRuns');

  nextCount = signal(0);

  everyCount = signal(0);

  effectCount = signal(0);

  constructor() {
    afterNextRender({
      write: () => this.addRun(this.nextRuns()),
    });
    afterEveryRender({
      write: () => this.addRun(this.everyRuns()),
    });
    afterRenderEffect({
      write: () => this.addEffectRun(),
    });
  }

  addEffectRun() {
    this.effectCount();
    this.addRun(this.effectRuns());
  }

  addRun(runs: ElementRef<HTMLElement>) {
    const element = runs.nativeElement;
    element.textContent = String(Number(element.textContent) + 1);
  }

  incrementNext() {
    this.nextCount.update((current) => current + 1);
  }

  incrementEvery() {
    this.everyCount.update((current) => current + 1);
  }

  incrementEffect() {
    this.effectCount.update((current) => current + 1);
  }

}
