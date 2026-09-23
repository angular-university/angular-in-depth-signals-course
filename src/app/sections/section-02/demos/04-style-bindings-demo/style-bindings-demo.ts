import { Component, signal } from '@angular/core';

@Component({
  selector: 'style-bindings-demo',
  templateUrl: './style-bindings-demo.html',
})
export class StyleBindingsDemo {

  fontSize = signal(22);

  apply(size: number) {
    this.fontSize.set(size);
  }

}
