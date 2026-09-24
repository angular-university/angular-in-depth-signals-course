import { Component } from '@angular/core';
import { MutationDemo } from './demos/01-mutation-demo/mutation-demo';
import { ComputedDemo } from './demos/02-computed-demo/computed-demo';
import { LinkedSignalDemo } from './demos/03-linked-signal-demo/linked-signal-demo';
import { EffectDemo } from './demos/04-effect-demo/effect-demo';
import { EqualDemo } from './demos/05-equal-demo/equal-demo';
import { UntrackedDemo } from './demos/06-untracked-demo/untracked-demo';
import { EffectCleanupDemo } from './demos/07-effect-cleanup-demo/effect-cleanup-demo';

@Component({
  selector: 'section-06',
  imports: [
    MutationDemo,
    ComputedDemo,
    LinkedSignalDemo,
    EffectDemo,
    EqualDemo,
    UntrackedDemo,
    EffectCleanupDemo,
  ],
  templateUrl: './section-06.html',
})
export class Section06 {

}
