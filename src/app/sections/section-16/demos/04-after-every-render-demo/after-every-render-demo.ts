import { Component, ElementRef, afterEveryRender, signal, viewChild } from '@angular/core';

@Component({
  selector: 'after-every-render-demo',
  templateUrl: './after-every-render-demo.html',
})
export class AfterEveryRenderDemo {

  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  runs = viewChild.required<ElementRef<HTMLElement>>('runs');

  size = signal(40);

  constructor() {
    afterEveryRender(() => {
      const size = this.size();
      this.drawCircle(size);
      this.countRun();
    });
  }

  drawCircle(size: number) {
    const context = this.canvas().nativeElement.getContext('2d');
    if (!context) {
      return;
    }
    context.clearRect(0, 0, 200, 200);
    context.fillStyle = '#9717E7';
    context.beginPath();
    context.arc(100, 100, size, 0, Math.PI * 2);
    context.fill();
  }

  countRun() {
    const runs = this.runs().nativeElement;
    runs.textContent = String(Number(runs.textContent) + 1);
  }

  setSize(value: string) {
    this.size.set(Number(value));
  }

}
