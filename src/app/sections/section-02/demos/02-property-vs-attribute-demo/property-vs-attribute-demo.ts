import { Component, signal } from '@angular/core';

@Component({
  selector: 'property-vs-attribute-demo',
  templateUrl: './property-vs-attribute-demo.html',
})
export class PropertyVsAttributeDemo {

  disabled = signal(false);

  role = signal('button');

  toggleDisabled() {
    this.disabled.update((current) => !current);
  }

  toggleRole() {
    if (this.role() === 'button') {
      this.role.set('switch');
      return;
    }

    this.role.set('button');
  }

}
