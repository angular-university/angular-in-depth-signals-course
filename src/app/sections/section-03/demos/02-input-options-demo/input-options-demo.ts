import { Component } from '@angular/core';
import { RequiredLabel } from './required-label';
import { AliasedLabel } from './aliased-label';
import { DefaultLabel } from './default-label';

@Component({
  selector: 'input-options-demo',
  imports: [RequiredLabel, AliasedLabel, DefaultLabel],
  templateUrl: './input-options-demo.html',
})
export class InputOptionsDemo {

}
