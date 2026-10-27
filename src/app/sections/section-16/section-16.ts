import { Component } from '@angular/core';
import { DestroyRefDemo } from './demos/01-destroy-ref-demo/destroy-ref-demo';
import { AfterNextRenderDemo } from './demos/02-after-next-render-demo/after-next-render-demo';

@Component({
  selector: 'section-16',
  imports: [DestroyRefDemo, AfterNextRenderDemo],
  templateUrl: './section-16.html',
})
export class Section16 {

}
