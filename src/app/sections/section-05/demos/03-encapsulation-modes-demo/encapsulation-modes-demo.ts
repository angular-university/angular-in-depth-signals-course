import { Component, signal } from '@angular/core';
import { EmulatedMode } from './emulated-mode';
import { NoneMode } from './none-mode';

@Component({
  selector: 'encapsulation-modes-demo',
  imports: [EmulatedMode, NoneMode],
  templateUrl: './encapsulation-modes-demo.html',
})
export class EncapsulationModesDemo {

  mode = signal('Emulated');

}
