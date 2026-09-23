import { Component, signal } from '@angular/core';
import { Temperature } from './temperature';

@Component({
  selector: 'computed-inputs-demo',
  imports: [Temperature],
  templateUrl: './computed-inputs-demo.html',
})
export class ComputedInputsDemo {

  celsius = signal(20);

  heat() {
    this.celsius.update((current) => current + 5);
  }

}
