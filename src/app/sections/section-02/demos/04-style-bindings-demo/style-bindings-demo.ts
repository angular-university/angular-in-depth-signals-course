import { Component, signal } from '@angular/core';

@Component({
  selector: 'style-bindings-demo',
  templateUrl: './style-bindings-demo.html',
  styleUrl: './style-bindings-demo.scss',
})
export class StyleBindingsDemo {

  progress = signal(30);

  advance() {
    this.progress.update((current) => current + 10);
  }

  reset() {
    this.progress.set(0);
  }

}
