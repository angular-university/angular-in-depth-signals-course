import { Component } from '@angular/core';
import { MOCK_COURSES } from '../../../../shared/mock-courses';

@Component({
  selector: 'interpolation-demo',
  templateUrl: './interpolation-demo.html',
})
export class InterpolationDemo {

  course = MOCK_COURSES[1];

  discounted(price: number, percent: number) {
    return price - (price * percent) / 100;
  }

}
