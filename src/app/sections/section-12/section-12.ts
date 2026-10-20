import { Component } from '@angular/core';
import { DeferBlocksDemo } from './demos/01-defer-blocks-demo/defer-blocks-demo';
import { TriggersDemo } from './demos/02-triggers-demo/triggers-demo';
import { WhenPrefetchDemo } from './demos/03-when-prefetch-demo/when-prefetch-demo';
import { BoundaryDemo } from './demos/04-boundary-demo/boundary-demo';

@Component({
  selector: 'section-12',
  imports: [DeferBlocksDemo, TriggersDemo, WhenPrefetchDemo, BoundaryDemo],
  templateUrl: './section-12.html',
})
export class Section12 {

}
