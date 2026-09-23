import { Component } from '@angular/core';
import { InputDemo } from './demos/01-input-demo/input-demo';
import { InputOptionsDemo } from './demos/02-input-options-demo/input-options-demo';
import { InputTransformsDemo } from './demos/03-input-transforms-demo/input-transforms-demo';
import { ComputedInputsDemo } from './demos/04-computed-inputs-demo/computed-inputs-demo';
import { OutputDemo } from './demos/05-output-demo/output-demo';
import { ModelDemo } from './demos/06-model-demo/model-demo';
import { HostDemo } from './demos/07-host-demo/host-demo';
import { ViewChildDemo } from './demos/08-view-child-demo/view-child-demo';
import { QueryOptionsDemo } from './demos/09-query-options-demo/query-options-demo';
import { ViewChildrenDemo } from './demos/10-view-children-demo/view-children-demo';

@Component({
  selector: 'section-03',
  imports: [
    InputDemo,
    InputOptionsDemo,
    InputTransformsDemo,
    ComputedInputsDemo,
    OutputDemo,
    ModelDemo,
    HostDemo,
    ViewChildDemo,
    QueryOptionsDemo,
    ViewChildrenDemo,
  ],
  templateUrl: './section-03.html',
})
export class Section03 {

}
