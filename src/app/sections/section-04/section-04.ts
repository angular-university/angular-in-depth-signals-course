import { Component } from '@angular/core';
import { IfDemo } from './demos/01-if-demo/if-demo';
import { SwitchDemo } from './demos/02-switch-demo/switch-demo';
import { ForDemo } from './demos/03-for-demo/for-demo';

@Component({
  selector: 'section-04',
  imports: [
    IfDemo,
    SwitchDemo,
    ForDemo,
  ],
  templateUrl: './section-04.html',
})
export class Section04 {

}
