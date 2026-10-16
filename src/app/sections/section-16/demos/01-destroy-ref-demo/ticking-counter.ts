import { Component } from '@angular/core';
import { ticker } from './ticker';

@Component({
  selector: 'ticking-counter',
  templateUrl: './ticking-counter.html',
})
export class TickingCounter {

  ticks = ticker(1000);

}
