import { Component, inject } from '@angular/core';
import { LEVEL } from './level';
import { InjectionOptionsDemo } from './injection-options-demo';

@Component({
  selector: 'options-leaf',
  templateUrl: './options-leaf.html',
})
export class OptionsLeaf {

  optional = inject(LEVEL, { self: true, optional: true });

  host = inject(InjectionOptionsDemo, { host: true, optional: true });

}
