import { Component } from '@angular/core';
import { DestroyRefDemo } from './demos/01-destroy-ref-demo/destroy-ref-demo';
import { RenderHooksDemo } from './demos/02-render-hooks-demo/render-hooks-demo';

@Component({
  selector: 'section-16',
  imports: [DestroyRefDemo, RenderHooksDemo],
  templateUrl: './section-16.html',
})
export class Section16 {

}
