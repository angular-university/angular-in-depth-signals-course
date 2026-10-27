import { Component, ElementRef, afterNextRender, viewChild } from '@angular/core';

@Component({
  selector: 'scrolled-list',
  templateUrl: './scrolled-list.html',
})
export class ScrolledList {

  last = viewChild.required<ElementRef<HTMLElement>>('last');

  lines = ['Line 1', 'Line 2', 'Line 3', 'Line 4', 'Line 5', 'Line 6', 'Line 7', 'Line 8'];

  constructor() {
    afterNextRender({
      write: () => this.last().nativeElement.scrollIntoView({ block: 'nearest' }),
    });
  }

}
