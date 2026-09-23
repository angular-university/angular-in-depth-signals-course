import { Component } from '@angular/core';
import { HostToggle } from './host-toggle';
import { WindowWidth } from './window-width';
import { PageClicks } from './page-clicks';

@Component({
  selector: 'host-demo',
  imports: [HostToggle, WindowWidth, PageClicks],
  templateUrl: './host-demo.html',
})
export class HostDemo {

}
