import { Component, inject } from '@angular/core';
import { LEVEL } from './level';
import { OptionsLeaf } from './options-leaf';

@Component({
  selector: 'options-child',
  imports: [OptionsLeaf],
  providers: [{ provide: LEVEL, useValue: 'child' }],
  templateUrl: './options-child.html',
})
export class OptionsChild {

  level = inject(LEVEL);

  self = inject(LEVEL, { self: true });

  skipSelf = inject(LEVEL, { skipSelf: true });

}
