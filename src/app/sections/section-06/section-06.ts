import { Component } from '@angular/core';
import { MutationDemo } from './demos/01-mutation-demo/mutation-demo';
import { ComputedDemo } from './demos/02-computed-demo/computed-demo';
import { LinkedSignalDemo } from './demos/03-linked-signal-demo/linked-signal-demo';
import { EffectDemo } from './demos/04-effect-demo/effect-demo';
import { DependenciesDemo } from './demos/05-dependencies-demo/dependencies-demo';
import { EqualDemo } from './demos/06-equal-demo/equal-demo';
import { UntrackedDemo } from './demos/07-untracked-demo/untracked-demo';
import { EffectCleanupDemo } from './demos/08-effect-cleanup-demo/effect-cleanup-demo';

@Component({
  selector: 'section-06',
  imports: [
    MutationDemo,
    ComputedDemo,
    LinkedSignalDemo,
    EffectDemo,
    DependenciesDemo,
    EqualDemo,
    UntrackedDemo,
    EffectCleanupDemo,
  ],
  templateUrl: './section-06.html',
})
export class Section06 {

}
