import { Component } from '@angular/core';
import { SectionPage } from '../../shared/section-page/section-page';
import { DemoBlock } from '../../shared/demo-block/demo-block';
import { FirstComponentDemo } from './demos/first-component-demo';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

@Component({
  selector: 's01-intro',
  imports: [SectionPage, DemoBlock, FirstComponentDemo, FirstSignalDemo, NotASignalDemo],
  template: `
    <section-page [number]="1" heading="Introduction to Angular, with Signals From the Beginning">

      <demo-block heading="Our first component" lessons="1.1-1.2">
        <first-component-demo />
      </demo-block>

      <demo-block heading="Our first signal — set() and update()" lessons="1.3">
        <first-signal-demo />
      </demo-block>

      <demo-block heading="What happens when data is not in a signal" lessons="1.4">
        <not-a-signal-demo />
      </demo-block>

    </section-page>
  `,
})
export class S01Intro {

}
