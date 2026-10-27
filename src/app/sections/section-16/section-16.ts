import { Component } from '@angular/core';
import { DestroyRefDemo } from './demos/01-destroy-ref-demo/destroy-ref-demo';
import { AfterNextRenderDemo } from './demos/02-after-next-render-demo/after-next-render-demo';
import { AfterRenderEffectDemo } from './demos/03-after-render-effect-demo/after-render-effect-demo';

@Component({
  selector: 'section-16',
  imports: [DestroyRefDemo, AfterNextRenderDemo, AfterRenderEffectDemo],
  templateUrl: './section-16.html',
})
export class Section16 {

}
