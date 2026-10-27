import { Component, ElementRef, Injector, afterNextRender, inject, signal, viewChild, viewChildren } from '@angular/core';

@Component({
  selector: 'after-next-render-demo',
  templateUrl: './after-next-render-demo.html',
})
export class AfterNextRenderDemo {

  injector = inject(Injector);

  input = viewChild.required<ElementRef<HTMLInputElement>>('input');

  items = viewChildren<ElementRef<HTMLElement>>('item');

  lines = signal(['Line 1', 'Line 2', 'Line 3']);

  addLine() {
    this.lines.update((lines) => [...lines, `Line ${lines.length + 1}`]);
    afterNextRender(() => {
      const last = this.items().at(-1);
      last?.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, { injector: this.injector });
  }

}
