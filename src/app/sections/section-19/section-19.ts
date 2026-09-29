import { Component } from '@angular/core';
import { ToSignalDemo } from './demos/01-to-signal-demo/to-signal-demo';
import { RxResourceDemo } from './demos/02-rx-resource-demo/rx-resource-demo';

@Component({
  selector: 'section-19',
  imports: [ToSignalDemo, RxResourceDemo],
  templateUrl: './section-19.html',
})
export class Section19 {

}
