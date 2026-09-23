import { Component, signal } from '@angular/core';
import { SeatPicker } from './seat-picker';

@Component({
  selector: 'two-way-binding-demo',
  imports: [SeatPicker],
  templateUrl: './two-way-binding-demo.html',
})
export class TwoWayBindingDemo {

  price = 50;

  seats = signal(1);

}
