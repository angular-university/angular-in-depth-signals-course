import { Component, signal } from '@angular/core';

@Component({
  selector: 'let-demo',
  templateUrl: './let-demo.html',
})
export class LetDemo {

  price = 50;

  seats = signal(1);

}
