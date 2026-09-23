import { Component, signal } from '@angular/core';

@Component({
  selector: 'style-bindings-demo',
  templateUrl: './style-bindings-demo.html',
  styleUrl: './style-bindings-demo.scss',
})
export class StyleBindingsDemo {

  progress = signal(30);

  change(delta: number) {
    this.progress.update((current) => Math.min(100, Math.max(0, current + delta)));
  }

}
