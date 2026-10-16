import { Component } from '@angular/core';
import { CollapsibleDemo } from './demos/01-collapsible-demo/collapsible-demo';
import { HostDirectivesDemo } from './demos/02-host-directives-demo/host-directives-demo';

@Component({
  selector: 'section-14',
  imports: [CollapsibleDemo, HostDirectivesDemo],
  templateUrl: './section-14.html',
})
export class Section14 {

}
