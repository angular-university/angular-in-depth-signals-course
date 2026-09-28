import { Component } from '@angular/core';
import { StatelessServiceDemo } from './demos/01-stateless-service-demo/stateless-service-demo';
import { StatefulServiceDemo } from './demos/02-stateful-service-demo/stateful-service-demo';

@Component({
  selector: 'section-09',
  imports: [StatelessServiceDemo, StatefulServiceDemo],
  templateUrl: './section-09.html',
})
export class Section09 {

}
