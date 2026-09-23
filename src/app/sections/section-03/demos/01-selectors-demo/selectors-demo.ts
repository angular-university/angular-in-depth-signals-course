import { Component } from '@angular/core';
import { ElementSelector } from './element-selector';
import { AttributeSelector } from './attribute-selector';
import { ClassSelector } from './class-selector';

@Component({
  selector: 'selectors-demo',
  imports: [ElementSelector, AttributeSelector, ClassSelector],
  templateUrl: './selectors-demo.html',
})
export class SelectorsDemo {

}
