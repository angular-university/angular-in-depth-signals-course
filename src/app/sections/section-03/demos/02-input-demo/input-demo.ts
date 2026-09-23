import { Component, signal } from '@angular/core';
import { Greeting } from './greeting';

@Component({
  selector: 'input-demo',
  imports: [Greeting],
  templateUrl: './input-demo.html',
})
export class InputDemo {

  name = signal('Angular');

  apply(name: string) {
    this.name.set(name);
  }

}
