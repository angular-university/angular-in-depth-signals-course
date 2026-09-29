import { Component } from '@angular/core';
import { ToSignalDemo } from './demos/01-to-signal-demo/to-signal-demo';
import { RxResourceDemo } from './demos/02-rx-resource-demo/rx-resource-demo';
import { SwitchMapDemo } from './demos/03-switch-map-demo/switch-map-demo';

@Component({
  selector: 'section-19',
  imports: [ToSignalDemo, RxResourceDemo, SwitchMapDemo],
  templateUrl: './section-19.html',
})
export class Section19 {

}
