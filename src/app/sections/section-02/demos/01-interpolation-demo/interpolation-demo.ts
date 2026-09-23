import { Component } from '@angular/core';

@Component({
  selector: 'interpolation-demo',
  templateUrl: './interpolation-demo.html',
})
export class InterpolationDemo {

  course = {
    title: 'Angular In Depth (Signals Edition)',
    category: 'BEGINNER',
    price: 50,
  };

  discounted(price: number, percent: number) {
    return price - (price * percent) / 100;
  }

}
