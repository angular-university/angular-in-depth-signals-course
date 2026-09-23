import { Component, signal } from '@angular/core';

@Component({
  selector: 'page-clicks',
  templateUrl: './page-clicks.html',
  host: {
    class: 'panel',
    '(document:click)': 'countClick()',
  },
})
export class PageClicks {

  clicks = signal(0);

  countClick() {
    this.clicks.update((current) => current + 1);
  }

}
