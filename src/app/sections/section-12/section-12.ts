import { Component } from '@angular/core';
import { FormattingPipesDemo } from './demos/01-formatting-pipes-demo/formatting-pipes-demo';
import { PipeConfigDemo } from './demos/02-pipe-config-demo/pipe-config-demo';
import { UtilityPipesDemo } from './demos/03-utility-pipes-demo/utility-pipes-demo';
import { CustomPipeDemo } from './demos/04-custom-pipe-demo/custom-pipe-demo';
import { PipeVsComputedDemo } from './demos/05-pipe-vs-computed-demo/pipe-vs-computed-demo';

@Component({
  selector: 'section-12',
  imports: [FormattingPipesDemo, PipeConfigDemo, UtilityPipesDemo, CustomPipeDemo, PipeVsComputedDemo],
  templateUrl: './section-12.html',
})
export class Section12 {

}
