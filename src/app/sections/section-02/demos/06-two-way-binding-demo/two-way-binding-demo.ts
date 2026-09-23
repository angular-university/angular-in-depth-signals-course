import { Component, signal } from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';
import { SeatPicker } from './seat-picker';

@Component({
  selector: 'two-way-binding-demo',
  imports: [SeatPicker],
  templateUrl: './two-way-binding-demo.html',
})
export class TwoWayBindingDemo {

  course = MOCK_COURSES[1];

  seats = signal(1);

}
