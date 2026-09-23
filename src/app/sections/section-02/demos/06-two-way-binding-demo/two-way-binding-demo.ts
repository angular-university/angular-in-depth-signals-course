import { Component, signal } from '@angular/core';
import { SeatPicker } from './seat-picker';

@Component({
  selector: 'two-way-binding-demo',
  imports: [SeatPicker],
  templateUrl: './two-way-binding-demo.html',
})
export class TwoWayBindingDemo {

  seats = signal(1);

  reset() {
    this.seats.set(1);
  }

}
