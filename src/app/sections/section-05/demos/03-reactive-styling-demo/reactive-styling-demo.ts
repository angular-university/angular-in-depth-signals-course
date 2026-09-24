import { Component, signal } from '@angular/core';
import { HueSwatch } from './hue-swatch';

@Component({
  selector: 'reactive-styling-demo',
  imports: [HueSwatch],
  templateUrl: './reactive-styling-demo.html',
})
export class ReactiveStylingDemo {

  hue = signal(280);

  applyHue(hue: string) {
    this.hue.set(Number(hue));
  }

}
