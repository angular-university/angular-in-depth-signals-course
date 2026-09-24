import { Component, effect, signal } from '@angular/core';
import { isEqual } from 'es-toolkit';

@Component({
  selector: 'equal-demo',
  templateUrl: './equal-demo.html',
})
export class EqualDemo {

  plain = signal(['A', 'B']);

  custom = signal(['A', 'B'], { equal: isEqual });

  constructor() {
    effect(() => {
      console.log(`plain notified: ${this.plain()}`);
    });

    effect(() => {
      console.log(`custom notified: ${this.custom()}`);
    });
  }

  setPlainSame() {
    this.plain.set(['A', 'B']);
  }

  setCustomSame() {
    this.custom.set(['A', 'B']);
  }

}
