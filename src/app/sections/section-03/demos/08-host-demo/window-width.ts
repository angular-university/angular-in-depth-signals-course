import { Component, signal } from '@angular/core';

@Component({
  selector: 'window-width',
  templateUrl: './window-width.html',
  host: {
    class: 'panel',
    '(window:resize)': 'onResize()',
  },
})
export class WindowWidth {

  width = signal(window.innerWidth);

  onResize() {
    this.width.set(window.innerWidth);
  }

}
