import { Component, ElementRef, afterEveryRender, inject, input } from '@angular/core';

@Component({
  selector: 'mixed-box',
  templateUrl: './box.html',
})
export class MixedBox {

  label = input.required<string>();

  size = input.required<number>();

  height = 0;

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    afterEveryRender(() => {
      element.style.width = `${this.size()}px`;
      this.height = element.offsetHeight;
    });
  }

}
