import { Component, contentChildren, linkedSignal } from '@angular/core';
import { Tab } from './tab';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.html',
})
export class Tabs {

  tabs = contentChildren(Tab);

  selected = linkedSignal(() => this.tabs()[0]);

  select(tab: Tab) {
    this.selected.set(tab);
  }

}
