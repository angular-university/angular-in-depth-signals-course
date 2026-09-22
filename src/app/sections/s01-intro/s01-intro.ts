import { Component, signal } from '@angular/core';
import { DemoBlock } from '../../shared/demo-block/demo-block';
import { DemoPicker } from '../../shared/demo-picker/demo-picker';
import { DemoInfo } from '../../shared/demo.model';
import { FirstComponentDemo } from './demos/first-component-demo';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

@Component({
  selector: 's01-intro',
  imports: [DemoBlock, DemoPicker, FirstComponentDemo, FirstSignalDemo, NotASignalDemo],
  templateUrl: './s01-intro.html',
  styleUrl: './s01-intro.scss',
})
export class S01Intro {

  protected readonly demos: DemoInfo[] = [
    { id: 'first-component', title: 'Our first component', lessons: '1.1-1.2' },
    { id: 'first-signal', title: 'Our first signal — set() and update()', lessons: '1.3' },
    { id: 'not-a-signal', title: 'What happens when data is not in a signal', lessons: '1.4' },
  ];

  protected selected = signal('first-component');

}
