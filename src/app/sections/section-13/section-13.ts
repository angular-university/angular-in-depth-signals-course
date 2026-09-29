import { Component } from '@angular/core';
import { ProjectionDemo } from './demos/01-projection-demo/projection-demo';
import { ContentQueriesDemo } from './demos/02-content-queries-demo/content-queries-demo';
import { TabsDemo } from './demos/03-tabs-demo/tabs-demo';

@Component({
  selector: 'section-13',
  imports: [ProjectionDemo, ContentQueriesDemo, TabsDemo],
  templateUrl: './section-13.html',
})
export class Section13 {

}
