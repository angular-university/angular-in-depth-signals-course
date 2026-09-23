import { Component, signal } from '@angular/core';

@Component({
  selector: 'host-toggle',
  templateUrl: './host-toggle.html',
  host: {
    class: 'panel',
    '[class.highlighted]': 'active()',
    '(click)': 'toggle()',
  },
})
export class HostToggle {

  active = signal(false);

  toggle() {
    this.active.update((current) => !current);
  }

}
