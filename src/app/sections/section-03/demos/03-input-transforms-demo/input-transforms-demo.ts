import { Component } from '@angular/core';
import { OnOff } from './on-off';
import { Doubler } from './doubler';

@Component({
  selector: 'input-transforms-demo',
  imports: [OnOff, Doubler],
  templateUrl: './input-transforms-demo.html',
})
export class InputTransformsDemo {

}
