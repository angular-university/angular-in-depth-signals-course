import { Component } from '@angular/core';
import { ResourceDemo } from './demos/01-resource-demo/resource-demo';
import { HttpResourceDemo } from './demos/02-http-resource-demo/http-resource-demo';
import { RequestObjectDemo } from './demos/03-request-object-demo/request-object-demo';
import { CancellationDemo } from './demos/04-cancellation-demo/cancellation-demo';
import { DebouncedDemo } from './demos/05-debounced-demo/debounced-demo';

@Component({
  selector: 'section-07',
  imports: [
    ResourceDemo,
    HttpResourceDemo,
    RequestObjectDemo,
    CancellationDemo,
    DebouncedDemo,
  ],
  templateUrl: './section-07.html',
})
export class Section07 {

}
