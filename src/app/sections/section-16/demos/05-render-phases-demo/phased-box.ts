import { Component, ElementRef, afterEveryRender, inject, input } from '@angular/core';

@Component({
  selector: 'phased-box',
  templateUrl: './box.html',
})
export class PhasedBox {

  label = input.required<string>();

  size = input.required<number>();

  height = 0;

  constructor() {
    const element: HTMLElement = inject(ElementRef).nativeElement;
    afterEveryRender({
      write: () => {
        element.style.width = `${this.size()}px`;
      },
      read: () => {
        this.height = element.offsetHeight;
      },
    });
  }

}
