import { Component, computed, inject, input } from '@angular/core';
import { Tabs } from './tabs';

@Component({
  selector: 'tab',
  host: {
    '[hidden]': '!active()',
  },
  templateUrl: './tab.html',
})
export class Tab {

  tabs = inject(Tabs);

  label = input('');

  active = computed(() => this.tabs.selected() === this);

}
