import { Component } from '@angular/core';
import { Tabs } from './tabs';
import { Tab } from './tab';

@Component({
  selector: 'tabs-demo',
  imports: [Tabs, Tab],
  templateUrl: './tabs-demo.html',
})
export class TabsDemo {

}
