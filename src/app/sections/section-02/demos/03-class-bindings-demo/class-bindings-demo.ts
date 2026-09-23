import { Component, signal } from '@angular/core';

@Component({
  selector: 'class-bindings-demo',
  templateUrl: './class-bindings-demo.html',
})
export class ClassBindingsDemo {

  highlighted = signal(false);

  toggleHighlighted() {
    this.highlighted.update((current) => !current);
  }

}
