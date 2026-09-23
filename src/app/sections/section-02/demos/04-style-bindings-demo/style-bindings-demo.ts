import { Component, signal } from '@angular/core';

@Component({
  selector: 'style-bindings-demo',
  templateUrl: './style-bindings-demo.html',
})
export class StyleBindingsDemo {

  fontSize = signal(22);

  toggleSize() {
    this.fontSize.update((current) => (current === 22 ? 40 : 22));
  }

}
