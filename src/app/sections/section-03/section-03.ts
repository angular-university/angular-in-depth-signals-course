import { Component } from '@angular/core';
import { InputsDemo } from './demos/01-inputs-demo/inputs-demo';
import { OutputDemo } from './demos/02-output-demo/output-demo';
import { ModelDemo } from './demos/03-model-demo/model-demo';
import { ViewQueriesDemo } from './demos/04-view-queries-demo/view-queries-demo';

@Component({
  selector: 'section-03',
  imports: [
    InputsDemo,
    OutputDemo,
    ModelDemo,
    ViewQueriesDemo,
  ],
  templateUrl: './section-03.html',
})
export class Section03 {

}
