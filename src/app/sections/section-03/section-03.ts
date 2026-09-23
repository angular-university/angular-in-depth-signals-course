import { Component } from '@angular/core';
import { InputsDemo } from './demos/01-inputs-demo/inputs-demo';
import { OutputDemo } from './demos/02-output-demo/output-demo';
import { ModelDemo } from './demos/03-model-demo/model-demo';
import { HostDemo } from './demos/04-host-demo/host-demo';
import { ViewChildDemo } from './demos/05-view-child-demo/view-child-demo';
import { QueryOptionsDemo } from './demos/06-query-options-demo/query-options-demo';
import { ViewChildrenDemo } from './demos/07-view-children-demo/view-children-demo';

@Component({
  selector: 'section-03',
  imports: [
    InputsDemo,
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
