import { Component } from '@angular/core';
import { Toggle } from './toggle';
import { Highlight } from './highlight';

@Component({
  selector: 'chip',
  hostDirectives: [Toggle, { directive: Highlight, inputs: ['myHighlight'] }],
  templateUrl: './chip.html',
})
export class Chip {

}
