import { Component, ElementRef, afterRenderEffect, signal, viewChild } from '@angular/core';

@Component({
  selector: 'after-render-effect-demo',
  templateUrl: './after-render-effect-demo.html',
})
export class AfterRenderEffectDemo {

  canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('canvas');

  size = signal(40);

  constructor() {
    afterRenderEffect(() => this.drawCircle());
  }

  drawCircle() {
    const context = this.canvas().nativeElement.getContext('2d');
    if (!context) {
      return;
    }
    context.clearRect(0, 0, 200, 200);
    context.fillStyle = '#9717E7';
    context.beginPath();
    context.arc(100, 100, this.size(), 0, Math.PI * 2);
    context.fill();
  }

  setSize(value: string) {
    this.size.set(Number(value));
  }

}
