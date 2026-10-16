import { Component, ElementRef, afterNextRender, afterRenderEffect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'render-hooks-demo',
  templateUrl: './render-hooks-demo.html',
})
export class RenderHooksDemo {

  measured = viewChild.required<ElementRef<HTMLElement>>('measured');

  lines = signal(['Line 1']);

  width = signal(0);

  height = signal(0);

  constructor() {
    afterNextRender({
      read: () => this.width.set(this.measured().nativeElement.offsetWidth),
    });
    afterRenderEffect({
      read: () => this.measureHeight(),
    });
  }

  measureHeight() {
    this.lines();
    this.height.set(this.measured().nativeElement.offsetHeight);
  }

  addLine() {
    this.lines.update((lines) => [...lines, `Line ${lines.length + 1}`]);
  }

}
