import { Component } from '@angular/core';
import { MixedList } from './mixed-list';
import { PhasedList } from './phased-list';

@Component({
  selector: 'render-phases-demo',
  imports: [MixedList, PhasedList],
  templateUrl: './render-phases-demo.html',
})
export class RenderPhasesDemo {

}
