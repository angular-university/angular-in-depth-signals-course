import { Component } from '@angular/core';
import { DeferBlocksDemo } from './demos/01-defer-blocks-demo/defer-blocks-demo';
import { TriggersDemo } from './demos/02-triggers-demo/triggers-demo';
import { BoundaryDemo } from './demos/03-boundary-demo/boundary-demo';

@Component({
  selector: 'section-16',
  imports: [DeferBlocksDemo, TriggersDemo, BoundaryDemo],
  templateUrl: './section-16.html',
})
export class Section16 {

}
