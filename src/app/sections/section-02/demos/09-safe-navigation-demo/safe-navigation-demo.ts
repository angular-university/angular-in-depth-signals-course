import { Component, signal } from '@angular/core';

@Component({
  selector: 'safe-navigation-demo',
  templateUrl: './safe-navigation-demo.html',
})
export class SafeNavigationDemo {

  data = signal<{ title: string } | null>(null);

  toggleData() {
    this.data.update((current) => (current ? null : { title: 'Angular In Depth (Signals Edition)' }));
  }

}
