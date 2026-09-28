import { Component } from '@angular/core';
import { CollapsibleDemo } from './demos/01-collapsible-demo/collapsible-demo';
import { ClickOutsideDemo } from './demos/02-click-outside-demo/click-outside-demo';
import { HostDirectivesDemo } from './demos/03-host-directives-demo/host-directives-demo';

@Component({
  selector: 'section-11',
  imports: [CollapsibleDemo, ClickOutsideDemo, HostDirectivesDemo],
  templateUrl: './section-11.html',
})
export class Section11 {

}
