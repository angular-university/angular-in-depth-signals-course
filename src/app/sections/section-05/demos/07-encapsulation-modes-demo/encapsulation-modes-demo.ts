import { Component, signal } from '@angular/core';
import { EmulatedMode } from './emulated-mode';
import { ShadowDomMode } from './shadow-dom-mode';
import { NoneMode } from './none-mode';

@Component({
  selector: 'encapsulation-modes-demo',
  imports: [EmulatedMode, ShadowDomMode, NoneMode],
  templateUrl: './encapsulation-modes-demo.html',
})
export class EncapsulationModesDemo {

  showNone = signal(false);

  toggleNone() {
    this.showNone.update((current) => !current);
  }

}
