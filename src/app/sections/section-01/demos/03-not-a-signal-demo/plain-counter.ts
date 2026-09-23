import { Component } from '@angular/core';

@Component({
  selector: 'plain-counter',
  templateUrl: './plain-counter.html',
})
export class PlainCounter {

  count = 0;

  start() {
    setInterval(() => {
      this.count++;
      console.log(`plain count is now ${this.count}, but the view still shows 0`);
    }, 1000);
  }

}
