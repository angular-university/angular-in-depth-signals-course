import { Component, signal } from '@angular/core';

@Component({
  selector: 'if-demo',
  templateUrl: './if-demo.html',
})
export class IfDemo {

  showLogo = signal(true);

  count = signal(0);

  value = signal(0);

  toggleLogo() {
    this.showLogo.update((current) => !current);
  }

  increment() {
    this.count.update((current) => current + 1);
  }

  reset() {
    this.count.set(0);
  }

  incrementValue() {
    this.value.update((current) => current + 1);
  }

  resetValue() {
    this.value.set(0);
  }

}
