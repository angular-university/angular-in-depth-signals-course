import { Component, signal } from '@angular/core';

@Component({
  selector: 'let-demo',
  templateUrl: './let-demo.html',
})
export class LetDemo {

  count = signal(1);

  increment() {
    this.count.update((current) => current + 1);
  }

}
