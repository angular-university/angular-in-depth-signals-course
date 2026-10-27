import { Component, ElementRef, Injector, afterNextRender, inject, signal, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'after-next-render-demo',
  templateUrl: './after-next-render-demo.html',
})
export class AfterNextRenderDemo {

  injector = inject(Injector);

  field = viewChild.required<ElementRef<HTMLInputElement>>('field');

  lineElements = viewChildren<ElementRef<HTMLElement>>('line');

  lines = signal(['Line 1', 'Line 2', 'Line 3']);

  constructor() {
    afterNextRender(() => this.field().nativeElement.focus());
  }

  addLine() {
    this.lines.update((lines) => [...lines, `Line ${lines.length + 1}`]);
    afterNextRender(
      () => this.lineElements().at(-1)?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' }),
      { injector: this.injector },
    );
  }

}
