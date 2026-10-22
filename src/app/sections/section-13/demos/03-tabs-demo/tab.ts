import { Component, computed, inject, input } from '@angular/core';
import { Tabs } from './tabs';

@Component({
  selector: 'tab',
  templateUrl: './tab.html',
})
export class Tab {

  label = input('');

  tabs = inject(Tabs);

  active = computed(() => this.tabs.selected() === this);

}
