import { Component } from '@angular/core';
import { ResourceDemo } from './demos/01-resource-demo/resource-demo';
import { HttpResourceDemo } from './demos/02-http-resource-demo/http-resource-demo';
import { DebouncedDemo } from './demos/03-debounced-demo/debounced-demo';

@Component({
  selector: 'section-07',
  imports: [
    ResourceDemo,
    HttpResourceDemo,
    DebouncedDemo,
  ],
  templateUrl: './section-07.html',
})
export class Section07 {

}
