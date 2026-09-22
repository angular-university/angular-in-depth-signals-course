import { Component, signal } from '@angular/core';
import { DemoBlock } from '../../shared/demo-block/demo-block';
import { DemoPicker } from '../../shared/demo-picker/demo-picker';
import { DemoInfo } from '../../shared/demo.model';
import { FirstComponentDemo } from './demos/first-component-demo';
import { FirstSignalDemo } from './demos/first-signal-demo';
import { NotASignalDemo } from './demos/not-a-signal-demo';

@Component({
  selector: 's02-intro',
  imports: [DemoBlock, DemoPicker, FirstComponentDemo, FirstSignalDemo, NotASignalDemo],
  templateUrl: './s02-intro.html',
  styleUrl: './s02-intro.scss',
})
export class S02Intro {

  protected readonly demos: DemoInfo[] = [
    { id: 'first-component', title: 'Our first component', lessons: '2.1-2.2' },
    { id: 'first-signal', title: 'Our first signal — set() and update()', lessons: '2.3' },
    { id: 'not-a-signal', title: 'What happens when data is not in a signal', lessons: '2.4' },
  ];

  protected selected = signal('first-component');

}
