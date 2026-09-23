import { Component } from '@angular/core';
import { SelectorsDemo } from './demos/01-selectors-demo/selectors-demo';
import { InputDemo } from './demos/02-input-demo/input-demo';
import { InputOptionsDemo } from './demos/03-input-options-demo/input-options-demo';
import { InputTransformsDemo } from './demos/04-input-transforms-demo/input-transforms-demo';
import { ComputedInputsDemo } from './demos/05-computed-inputs-demo/computed-inputs-demo';
import { OutputDemo } from './demos/06-output-demo/output-demo';
import { ModelDemo } from './demos/07-model-demo/model-demo';
import { HostDemo } from './demos/08-host-demo/host-demo';
import { ViewChildDemo } from './demos/09-view-child-demo/view-child-demo';
import { QueryOptionsDemo } from './demos/10-query-options-demo/query-options-demo';
import { ViewChildrenDemo } from './demos/11-view-children-demo/view-children-demo';

@Component({
  selector: 'section-03',
  imports: [
    SelectorsDemo,
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
