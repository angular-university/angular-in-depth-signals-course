import { Component, signal } from '@angular/core';

@Component({
  selector: 'if-demo',
  templateUrl: './if-demo.html',
})
export class IfDemo {

  value = signal(0);

  incrementValue() {
    this.value.update((current) => current + 1);
  }

  resetValue() {
    this.value.set(0);
  }

  count = signal(0);

  increment() {
    this.count.update((current) => current + 1);
  }

  reset() {
    this.count.set(0);
  }




  showLogo = signal(true);

  toggleLogo() {
    this.showLogo.update((current) => !current);
  }

}
