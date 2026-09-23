import { Component, signal } from '@angular/core';

@Component({
  selector: 'style-bindings-demo',
  templateUrl: './style-bindings-demo.html',
})
export class StyleBindingsDemo {

  fontSize = signal(17);

  toggleSize() {
    this.fontSize.update((current) => (current === 17 ? 32 : 17));
  }

}
