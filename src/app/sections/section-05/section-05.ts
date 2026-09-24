import { Component } from '@angular/core';
import { EncapsulationDemo } from './demos/01-encapsulation-demo/encapsulation-demo';
import { HostDemo } from './demos/02-host-demo/host-demo';
import { EncapsulationModesDemo } from './demos/03-encapsulation-modes-demo/encapsulation-modes-demo';

@Component({
  selector: 'section-05',
  imports: [
    EncapsulationDemo,
    HostDemo,
    EncapsulationModesDemo,
  ],
  templateUrl: './section-05.html',
})
export class Section05 {

}
