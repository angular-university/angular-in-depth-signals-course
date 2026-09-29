import { Component } from '@angular/core';
import { Collapsible } from '../01-collapsible-demo/collapsible';

@Component({
  selector: 'collapsible-text',
  hostDirectives: [
    {
      directive: Collapsible,
      inputs: ['expanded', 'collapsedClass'],
      outputs: ['opened', 'closed'],
    },
  ],
  templateUrl: './collapsible-text.html',
})
export class CollapsibleText {

}
