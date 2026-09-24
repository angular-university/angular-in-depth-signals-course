import { Component } from '@angular/core';
import { EncapsulationDemo } from './demos/01-encapsulation-demo/encapsulation-demo';
import { HostDemo } from './demos/02-host-demo/host-demo';
import { HostContextDemo } from './demos/03-host-context-demo/host-context-demo';
import { NgDeepDemo } from './demos/04-ng-deep-demo/ng-deep-demo';
import { CustomPropertiesDemo } from './demos/05-custom-properties-demo/custom-properties-demo';
import { ReactiveStylingDemo } from './demos/06-reactive-styling-demo/reactive-styling-demo';
import { EncapsulationModesDemo } from './demos/07-encapsulation-modes-demo/encapsulation-modes-demo';

@Component({
  selector: 'section-05',
  imports: [
    EncapsulationDemo,
    HostDemo,
    HostContextDemo,
    NgDeepDemo,
    CustomPropertiesDemo,
    ReactiveStylingDemo,
    EncapsulationModesDemo,
  ],
  templateUrl: './section-05.html',
})
export class Section05 {

}
